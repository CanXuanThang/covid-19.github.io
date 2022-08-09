import { useEffect, useState } from 'react';
import CountrySelector from './components/CountrySelector';
import Highlight from './components/Highlight';
import Summary from './components/Summary';
import { getCountries, getReportByConutry } from './apis';

function App() {
    const [countries, setCountries] = useState([]);
    const [selectedCountryId, setSelectedCountryId] = useState('');
    const [report, setReport] = useState([]);

    useEffect(() => {
        getCountries().then((res) => {
            setCountries(res.data);
            setSelectedCountryId('vn');
        });
    }, []);

    const handleOnChange = (e) => {
        setSelectedCountryId(e.target.value);
    };

    useEffect(() => {
        if (selectedCountryId) {
            const { Slug } = countries.find((country) => country.ISO2.toLowerCase() === selectedCountryId);

            getReportByConutry(Slug)
                .then((res) => {
                    res.data.pop();
                    setReport(res.data);
                })
                .catch((error) => {});
        }
    }, [countries, selectedCountryId]);

    return (
        <div className="App">
            <CountrySelector countries={countries} handleOnChange={handleOnChange} value={selectedCountryId} />
            <Highlight report={report} />
            <Summary countryId={selectedCountryId} report={report} />
        </div>
    );
}

export default App;
