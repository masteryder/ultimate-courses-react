import React, {Fragment, useEffect, useState} from 'react';
import axios from 'axios';
import './styles/records.scss';
import Header from "./Header";
import Section from "./Section";
import List from "./List";
import Form from "./Form";

const Container = ()=>{
/*
  const getRecords = async ()=> {
    try {
      const response = await fetch('http://localhost:5000/api/records', {mode:'cors'});
      const data = await response.json();
      console.log({data});
    }
    catch (e){
      console.log(e)
    }
  }
*/

  useEffect(()=>{
    // getRecords();
    axios.get('http://localhost:5000/api/records').then(({data})=>{
      console.log(data);
      setRecords(data)
    });
    //setRecords()
  }, [])

  const [records, setRecords] = useState([]);
  const onSubmitRecordHandler = (r) =>{
/*    setRecords([r, ...records].sort((a, b)=>{
      if(a.recordName < b.recordName){
        return -1;
      }
      else if(a.recordName > b.recordName){
        return 1;
      }
      else return 0;
    }));*/
    axios.post('http://localhost:5000/api/records', r).then(({data})=>{
      setRecords([data, ...records]);
    });
  }
  return (
    <Fragment>
      <Header />
      <main>
        <Section headingText={"Add a new Favourite"}>
          <Form onSubmit={onSubmitRecordHandler}/>
        </Section>
        <Section headingText={"Records"}>
          <List records={records}/>
        </Section>
      </main>
    </Fragment>

  );
};
export default Container;