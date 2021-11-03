import React from 'react';
import { BrowserRouter , Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Menu from './pages/Menu';
import Milho from './pages/Milho';
import Laranja from './pages/Laranja';
import Soja from './pages/Soja';
import Cafe from './pages/Café';
import Amendoim from './pages/Amendoim';
import Trigo from './pages/Trigo';
import Algodao from './pages/Algodao';
import Feijao from './pages/Feijao';

import SojaChicago from './pages/Soja/SojaChicago';
import SojaCeapa from './pages/Soja/SojaCeapa';
import SojaCME from './pages/Soja/SojaCME';

import CafeArab from './pages/Café/CafeArab';
import CafeRobus from './pages/Café/CafeRobus';
import CafeNY from './pages/Café/CafeNY';

import LaranjaCeasas from './pages/Laranja/LaranjaCeasas';
import LaranjaInd from './pages/Laranja/LaranjaInd';
import LaranjaNY from './pages/Laranja/LaranjaNY';

import MilhoB3 from './pages/Milho/MilhoB3';
import MilhoEsalq from './pages/Milho/MilhoEsalq';
import MilhoChicago from './pages/Milho/MilhoChicago';

import TrigoCepea from './pages/Trigo/TrigoCepea';
import TrigoChicago from './pages/Trigo/TrigoChicago';
import TrigoIEA from './pages/Trigo/TrigoIEA';

import AmendoimCeasas from './pages/Amendoim/AmendoimCeasas';

import AlgodaoCeapa from './pages/Algodao/AlgodaoCeapa';
import AlgodaoIMEA from './pages/Algodao/AlgodaoIMEA';
import AlgodaoNY from './pages/Algodao/AlgodaoNY';

import Feijao85 from './pages/Feijao/Feijao85';
import FeijaoCaupi from './pages/Feijao/FeijaoCaupi';
import FeijaoPreto from './pages/Feijao/FeijaoPreto';


export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/menu" component={Menu} />   
                <Route path="/milho" component={Milho} />  
                <Route path="/milhob3" component={MilhoB3} /> 
                <Route path="/milhoesalq" component={MilhoEsalq} /> 
                <Route path="/milhochicago" component={MilhoChicago} />  
                <Route path="/laranja" component={Laranja} />
                <Route path="/laranjaceasas" component={LaranjaCeasas} /> 
                <Route path="/laranjaind" component={LaranjaInd} /> 
                <Route path="/laranjany" component={LaranjaNY} />  
                <Route path="/soja" component={Soja} />
                <Route path="/sojachicago" component={SojaChicago} />
                <Route path="/sojaceapa" component={SojaCeapa} />
                <Route path="/sojacme" component={SojaCME} />
                <Route path="/cafe" component={Cafe} />
                <Route path="/cafearab" component={CafeArab} />
                <Route path="/cafeRobus" component={CafeRobus} />
                <Route path="/cafeny" component={CafeNY} />
                <Route path="/trigo" component={Trigo} />
                <Route path="/trigocepea" component={TrigoCepea} />
                <Route path="/trigochicago" component={TrigoChicago} />
                <Route path="/trigoiea" component={TrigoIEA} />
                <Route path="/amendoim" component={Amendoim} />
                <Route path="/amendoimceasas" component={AmendoimCeasas} />
                <Route path="/algodao" component={Algodao} />
                <Route path="/algodaoceapa" component={AlgodaoCeapa} />
                <Route path="/algodaoimea" component={AlgodaoIMEA} />
                <Route path="/algodaony" component={AlgodaoNY} />
                <Route path="/feijao" component={Feijao} />
                <Route path="/feijao85" component={Feijao85} />
                <Route path="/feijaocaupi" component={FeijaoCaupi} />
                <Route path="/feijaopreto" component={FeijaoPreto} />

            </Switch>
        </BrowserRouter>
    )
}