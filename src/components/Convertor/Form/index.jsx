import React, { useState } from "react";
import conversionFactors from "./convertionFactors";

export default function Form() {

    const [amount, setAmount] = useState(0);
    const [fromVal, setFromVal] = useState("centimeter");
    const [toVal, setToVal] = useState("centimeter");
    const [convertResult, setConvertResult] = useState(0)


    function calcConvert() {
    
        const result = amount * conversionFactors[fromVal][toVal];
        setConvertResult(result)
    }

    

    return (
        <div className="mx-6 my-4 p-4 bg-blue-400 container rounded-md">
            <div className="flex flex-col">
                <label htmlFor="mainInput" className="text-left mb-2">Amount</label>
                <input type="number" id="mainInput" className="w-100 p-2 rounded-md"
                    onChange={(evt) => setAmount(+evt.target.value)}
                />
            </div>

            <div className="flex flex-row justify-between mt-6">

                <div className="flex flex-row gap-8">
                    <div className="flex flex-col">
                        <label htmlFor="from">From</label>
                        <select 
                            name="from" 
                            id="from" 
                            className="p-1 px-4 rounded-md"
                            onChange={(e)=> setFromVal(e.target.value)}
                            >
                            <option value="centimeter">cm</option>
                            <option value="inch">inch</option>
                            <option value="feet">feet</option>
                            <option value="meter">meter</option>
                            <option value="yard">yard</option>
                            <option value="mile">mile</option>
                            <option value="kilometer">kilometer</option>

                        </select>
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="from">To</label>
                        <select name="from" id="from" className="p-1 px-4 rounded-md" onChange={(e)=> setToVal(e.target.value)}>
                            <option value="centimeter">cm</option>
                            <option value="inch">inch</option>
                            <option value="feet">feet</option>
                            <option value="meter">meter</option>
                            <option value="yard">yard</option>
                            <option value="mile">mile</option>
                            <option value="kilometer">kilometer</option>
                        </select>
                    </div>
                </div>

                <button className="p-2 bg-blue-900 text-white rounded-md" onClick={calcConvert}>CONVERT</button>
            </div>

            <h2 className="text-md text-left m-8 ml-2">{convertResult}</h2>

        </div>
    )
}