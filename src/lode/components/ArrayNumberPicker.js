import React, {useEffect} from 'react';
import {useFieldArray, useFormContext} from "react-hook-form";

const ArrayNumberPicker = ({arrays = [], t = false, indexPlus = "0"}) => {
	let i = -1

	const {control} = useFormContext();
	const {fields, append, remove} = useFieldArray({
		control,
		name: 'soDanh'
	})

	console.log("XXXXX", fields)

	return Array.from(Array(arrays.length === 10 ? 1 :arrays.length / 10)).map((e,index)=>{
		return(
			<tr key={index}>
				{Array.from(Array(arrays.length === 10?10:arrays.length / 10)).map((e,index)=>{
					i++;
					let so;
					if(!t && arrays.length > 10) {
						so = i < 10 ? indexPlus+i:i.toString()
					}else if(!t) {
						so = i.toString()
					} else {
						so = i < 10 ? indexPlus+"0"+i:indexPlus+i
					}
					return(
						<td onClick={()=>{
							if(fields.length < 10) {
								const indexOfStevie = fields.findIndex(i => i.so === so);
								if(indexOfStevie > -1) remove(indexOfStevie)
								else append({so: so})
							} else {
								alert('Chơi tối đa 10 số')
							}
						}} key={index}>
							<span className={`so ${index} ${fields.findIndex(i => i.so === so) > -1 && 'active'}`}>
								<span className="so-item">{so}</span>
							</span>
						</td>
					)
				})}
			</tr>
		)
	});
};

export default ArrayNumberPicker;