import React from "react";
import "./thermostat.css";

export default function Thermostat({ heat, heightPercent}) {
  // Convert your heat value to a percentage of the thermometer height
 
  // cap between 0-100, invert: 0 heat -> 100% cover, 100 heat -> 0% cover


  return (
    <div id="container">
      <div id="glass">
        <div id="thermostat">
          <div
            id="thermo-cover"
            style={{ height: `${heightPercent}%`,
            borderRadius: heightPercent === 100 ? "10px" :"3px",
          }}
          ></div>
          <div id="thermoline" />
          <div id="incBy10">
            <div id="temp0" className="temp-mark10"><p>0</p></div>
            <div id="temp10" className="temp-mark10"><p>10</p></div>
            <div id="temp20" className="temp-mark10"><p>20</p></div>
            <div id="temp30" className="temp-mark10"><p>30</p></div>
            <div id="temp40" className="temp-mark10"><p>40</p></div>
            <div id="temp50" className="temp-mark10"><p>50</p></div>
            <div id="temp60" className="temp-mark10"><p>60</p></div>
            <div id="temp70" className="temp-mark10"><p>70</p></div>
            <div id="temp80" className="temp-mark10"><p>80</p></div>
            <div id="temp90" className="temp-mark10"><p>90</p></div>
            <div id="temp100" className="temp-mark10"><p>100</p></div>
          </div>
          <div id="incBy5">
            <div id="temp5" className="temp-mark5"><p></p></div>
            <div id="temp15" className="temp-mark5"><p></p></div>
            <div id="temp25" className="temp-mark5"><p></p></div>
            <div id="temp35" className="temp-mark5"><p></p></div>
            <div id="temp45" className="temp-mark5"><p></p></div>
            <div id="temp55" className="temp-mark5"><p></p></div>
            <div id="temp65" className="temp-mark5"><p></p></div>
            <div id="temp75" className="temp-mark5"><p></p></div>
            <div id="temp85" className="temp-mark5"><p></p></div>
            <div id="temp95" className="temp-mark5"><p></p></div>
          </div>
        </div>
      </div>
    </div>
  );
}
