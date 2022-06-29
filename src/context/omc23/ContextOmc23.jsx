import axios from 'axios';
import React,{useEffect,useState,useMemo} from 'react'
import {Toaster,toast} from 'react-hot-toast'
import { fetchAllUsers } from '../../redux/slices/users';
const Omc23Context = React.createContext();



export function Omc23Provider(props) {

  useEffect(() => {
    fetchData()
  }, []);
  //ESTADOS
  const[omc23n1,setomc23n1] = useState()
  const[omc23n2,setomc23n2] = useState()
  const[omc23n3,setomc23n3] = useState()
  const[omc23n4,setomc23n4] = useState()
  const[omc23n5,setomc23n5] = useState()
  const[omc23n6,setomc23n6] = useState()
  const[response,setresponse] =useState()

  
  //LLAMADO A LAS APIS 
  const fetchData = async ()=>{
    
    axios.get('http://127.0.0.1:8000/apiOMC23/ListarOMC23Nivel1/').then((response)=>{
      setomc23n1(response.data.results)
      
    })

    axios.get('http://127.0.0.1:8000/apiOMC23/ListarOMC23Nivel2/').then((response)=>{
      setomc23n2(response.data.results)
      
    })

    axios.get('http://127.0.0.1:8000/apiOMC23/ListarOMC23Nivel3/').then((response)=>{
      setomc23n3(response.data.results)
      })

    axios.get('http://127.0.0.1:8000/apiOMC23/ListarOMC23Nivel4/').then((response)=>{
      setomc23n4(response.data.results)})
    
    axios.get('http://127.0.0.1:8000/apiOMC23/ListarOMC23Nivel5/').then((response)=>{
      setomc23n5(response.data.results)})

    axios.get('http://127.0.0.1:8000/apiOMC23/ListarOMC23Nivel6/').then((response)=>{
      setomc23n6(response.data.results)})

  }



 



  const UpdateOmc23Url = async(idtabla,id,Data,fk)=>{

        switch(idtabla){
          case 1:
                axios.put(`http://localhost:8000/apiOMC23/EditarOMC23Nivel1/${id}/`,{
                Codigo: Data.Codigo,
                anioReg: Data.anioReg,
                definicionEng:Data.definicionEng,
                definicionSpa:Data.definicionSpa,
                descriEng:Data.descriEng,
                descriSpa: Data.descriSpa,
                ejemploEng:Data.ejemploEng,
                ejemploSpa:Data.ejemploSpa,
                }).then((response)=>{
                  console.log(response)
                  if(response.request.status===200){return (toast.success('El registro se ha actualizado'))}
                  setresponse(response.request.status)
                  
                })
          break;
          case 2:
            axios.put(`http://localhost:8000/apiOMC23/EditarOMC23Nivel2/${id}/`,{
                Codigo: Data.Codigo,
                anioReg: Data.anioReg,
                definicionEng:Data.definicionEng,
                definicionSpa:Data.definicionSpa,
                descriEng:Data.descriEng,
                descriSpa: Data.descriSpa,
                ejemploEng:Data.ejemploEng,
                ejemploSpa:Data.ejemploSpa,
                regFinal:Data.regFinal,
                fk_Omc23N1:fk,
                }).then((response)=>{
                  if(response.request.status===200){return (toast.success('El registro se ha actualizado'))}
                  setresponse(response.request.status)})
          break;
          case 3:
            axios.put(`http://localhost:8000/apiOMC23/EditarOMC23Nivel3/${id}/`,{
                Codigo: Data.Codigo,
                anioReg: Data.anioReg,
                definicionEng:Data.definicionEng,
                definicionSpa:Data.definicionSpa,
                descriEng:Data.descriEng,
                descriSpa: Data.descriSpa,
                ejemploEng:Data.ejemploEng,
                ejemploSpa:Data.ejemploSpa,
                regFinal:Data.regFinal,
                fk_Omc23N2:fk,
                }).then((response)=>{
                  if(response.request.status===200){return (toast.success('El registro se ha actualizado'))}
                  setresponse(response.request.status)})
          break;
          case 4:
            axios.put(`http://localhost:8000/apiOMC23/EditarOMC23Nivel4/${id}/`,{
                Codigo: Data.Codigo,
                anioReg: Data.anioReg,
                definicionEng:Data.definicionEng,
                definicionSpa:Data.definicionSpa,
                descriEng:Data.descriEng,
                descriSpa: Data.descriSpa,
                ejemploEng:Data.ejemploEng,
                ejemploSpa:Data.ejemploSpa,
                regFinal:Data.regFinal,
                fk_Omc23N3:fk,
                }).then((response)=>{
                  if(response.request.status===200){return (toast.success('El registro se ha actualizado'))}
                  setresponse(response.request.status)})
          break;
          case 5:
            axios.put(`http://localhost:8000/apiOMC23/EditarOMC23Nivel5/${id}/`,{
                Codigo: Data.Codigo,
                anioReg: Data.anioReg,
                definicionEng:Data.definicionEng,
                definicionSpa:Data.definicionSpa,
                descriEng:Data.descriEng,
                descriSpa: Data.descriSpa,
                ejemploEng:Data.ejemploEng,
                ejemploSpa:Data.ejemploSpa,
                regFinal:Data.regFinal,
                fk_Omc23N4:fk,
                }).then((response)=>{
                  if(response.request.status===200){return (toast.success('El registro se ha actualizado'))}
                  setresponse(response.request.status)})

          break;
          case 6:
            axios.put(`http://localhost:8000/apiOMC23/EditarOMC23Nivel6/${id}/`,{
                Codigo: Data.Codigo,
                anioReg: Data.anioReg,
                definicionEng:Data.definicionEng,
                definicionSpa:Data.definicionSpa,
                descriEng:Data.descriEng,
                descriSpa: Data.descriSpa,
                ejemploEng:Data.ejemploEng,
                ejemploSpa:Data.ejemploSpa,
                regFinal:Data.regFinal,
                fk_Omc23N5:fk,
                }).then((response)=>{
                  if(response.request.status===200){return (toast.success('El registro se ha actualizado'))}
                  setresponse(response.request.status)})
          break;

          }
    }
    


    const value = useMemo(()=>{
      return ({
        UpdateOmc23Url,
        omc23n1,
        omc23n2,
        omc23n3,
        omc23n4,
        omc23n5,
        omc23n6,
        response
      })
    },[omc23n1,omc23n2,omc23n3,omc23n4,omc23n5,omc23n6,response])

    return <Omc23Context.Provider value={value} {...props}/>
}



export function useOmc23(){
  const context = React.useContext(Omc23Context)
  if(!context) {
    throw new ('useOmc23 debe estar dentroi del provedor omc23Context')
  }

  return context;
}
