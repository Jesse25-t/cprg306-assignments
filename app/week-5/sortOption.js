"use client"
import { useState } from "react";
export default function SortOption({myArray}){
        const nameSort = myArray.sort((index0, index1) => index0 > index1);
        // let anotherConstant = array.sort

        return(
            <div>{nameSort}</div>
        );
};