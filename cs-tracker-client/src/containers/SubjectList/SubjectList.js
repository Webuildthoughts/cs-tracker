import React,{useState,useEffect} from 'react'
import Subject from '../../components/Subject/Subject'
import axios from 'axios'


const SubjectList = () => {

  const [subjectData,setSubjectData]=useState([])


  useEffect(()=>{
    fetchSubjectList()
  },[])


  const fetchSubjectList=async ()=>
  {
    
   try{
    const res=await axios.get('http://localhost:5000/api/subject/all')
      console.log("Response fetched subject list"+res.data.data);
      setSubjectData(res.data.data)
    }
    catch(error) {
      console.log("Error occured subject list"+error.message);
    }
  }

  return (
    <div>
      {subjectData && subjectData.map(
        ({
          _id,
          name,
          description,
          topicsCount
        }) => {
          return (
            <Subject
              key={_id}
              id={_id}
              name={name}
              description={description}
              topicsCount={topicsCount}
              imageUrl='google.com'
            />
          )
        }
      )}
    </div>
  )
}

export default SubjectList
