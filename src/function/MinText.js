import React from 'react';
import { Link } from 'react-router-dom'
export default function MinText({ text, max }) {
    let maxNum, result, rJoin;
    maxNum = text.split(' ', 100).length;
    result = text.split(' ', max).join(' ');
    return <div title={text} >{(maxNum > max) ? <>{result} <Link to="/"> . . . </Link></> : result}</div>;
}
