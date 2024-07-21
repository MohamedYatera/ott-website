import React, { useState } from 'react';
import './App.css';
import Main from './components/main-page/main';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';
import MultiFilters from './components/Plan/MultiFilters';
import { IntlProvider } from 'react-intl';
import { messages } from './messages';
import Header from './components/Header/Header';
import Faq from './components/Faq/Faq';


function App() {
  const [locale, setLocale] = useState('en');

  const handleLanguageChange = (e) => {
    setLocale(e.target.value);
  };

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div className="App">
        <Header locale={locale} handleLanguageChange={handleLanguageChange} />
        <Main />
        <Programs />
        <Reasons />
        <MultiFilters />
        <Testimonials />
        <Join />
        <Faq/>
        <Footer />
      </div>
    </IntlProvider>
  );
}

export default App;
