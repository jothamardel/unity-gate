import React from 'react';
import Particle from '../particles/particles.component';
import { Icon } from 'flwww';
import NavBar from '../navbar/navbar.component';
import CustomButton from '../customButton/customButton.component';

import './yearUpdate.styles.sass';

const YearUpdate = () => (
  <React.Fragment>
    <Particle/>
    <NavBar />
    <div className='year-container'>
      <h1 className='year-heading'>Welcome, user</h1>
      <p className='year-desc'>Let's update your details...</p>
      <h1 className='year-title'>Year:</h1>
      <select className='year-input'>
        <option>Select year of graduation</option>
        <option>1955</option>
        <option>1956</option>
        <option>1957</option>
        <option>1958</option>
        <option>1959</option>
        <option>1960</option>
        <option>1961</option>
        <option>1962</option>
        <option>1963</option>
        <option>1964</option>
        <option>1965</option>
        <option>1966</option>
        <option>1967</option>
        <option>1968</option>
        <option>1969</option>
        <option>1970</option>
        <option>1971</option>
        <option>1972</option>
        <option>1973</option>
        <option>1974</option>
        <option>1975</option>
        <option>1976</option>
        <option>1977</option>
        <option>1978</option>
        <option>1979</option>
        <option>1980</option>
        <option>1981</option>
        <option>1982</option>
        <option>1983</option>
        <option>1984</option>
        <option>1985</option>
        <option>1986</option>
        <option>1987</option>
        <option>1988</option>
        <option>1989</option>
        <option>1990</option>
        <option>1991</option>
        <option>1992</option>
        <option>1993</option>
        <option>1994</option>
        <option>1995</option>
        <option>1996</option>
        <option>1997</option>
        <option>1998</option>
        <option>1999</option>
        <option>2000</option>
        <option>2001</option>
        <option>2002</option>
        <option>2003</option>
        <option>2004</option>
        <option>2005</option>
        <option>2006</option>
        <option>2007</option>
        <option>2008</option>
        <option>2009</option>
        <option>2010</option>
        <option>2011</option>
        <option>2012</option>
        <option>2013</option>
        <option>2014</option>
        <option>2015</option>
        <option>2016</option>
        <option>2017</option>
        <option>2018</option>
        <option>2019</option>
        <option>2020</option>
      </select>
      <CustomButton className='next-btn'>
        Next
        <Icon type="arrowRight" />
      </CustomButton>
    </div>
  </React.Fragment>
);

export default YearUpdate;