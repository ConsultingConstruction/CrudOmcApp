import axios from 'axios';
import React,{useEffect,useState,useMemo} from 'react'
import {Toaster,toast} from 'react-hot-toast'
import { useDispatch} from 'react-redux';
import { fetchAllUsers,fetchAllOMCN2,fetchAllOMCN3,fetchAllOMCN4,fetchAllOMCN5,fetchAllOMCN6} from '../../redux/slices/users'
// import { fetchAllUsers,fetchAllOMCN2,fetchAllOMCN3,fetchAllOMCN4,fetchAllOMCN5,fetchAllOMCN6} from '../../redux/slices'
const Omc23Context = React.createContext();



export function Omc23Provider(props) {
  
  useEffect(() => {
    fetchData()
  }, []);
 
  const dispatch = useDispatch()

  //Listado de Tablas
  const [dataomcn2,setdataomcn2] = useState([])
  const [dataomcn3,setdataomcn3] = useState([])
  const [dataomcn4,setdataomcn4] = useState([])
  const [dataomcn5,setdataomcn5] = useState([])
  const [dataomcn6,setdataomcn6] = useState([])

  const [selectcodigo1,setselectcodigo1]=useState()
  const [selectcodigo2,setselectcodigo2]=useState()
  const [selectcodigo3,setselectcodigo3]=useState()
  const [selectcodigo4,setselectcodigo4]=useState()
  const [selectcodigo5,setselectcodigo5]=useState()

  //ESTADOS
  const[omc23n1,setomc23n1] = useState([])
  const[omc23n2,setomc23n2] = useState([])
  const[omc23n3,setomc23n3] = useState([])
  const[omc23n4,setomc23n4] = useState([])
  const[omc23n5,setomc23n5] = useState([])
  const[omc23n6,setomc23n6] = useState([])
  const[response,setresponse] =useState([])

  //Funciones para filtrar
        //FUNCIONES PARA FILTRAR
      const selectOpp = (data)=> {
           setselectcodigo1(data)
          const selectid = omc23n1.filter((dato)=>dato.Codigo === data)
          setdataomcn2(omc23n2.filter((dato)=>dato.fk_Omc23N1 === selectid[0].idOmc23N1))
          setdataomcn3([])
          setdataomcn4([])
          setdataomcn5([])
  

        }
    
      const selectOpp2 = (data)=> {
        setselectcodigo2(data)
          const selectid = omc23n2.filter((dato)=>dato.Codigo === data)
          setdataomcn3(omc23n3.filter((dato)=>dato.fk_Omc23N2 === selectid[0].idOmc23N2))
          setdataomcn4([])
          setdataomcn5([])
          setdataomcn6([])
          
        }
        
      const selectOpp3 = (data)=> {
        setselectcodigo3(data)
          const selectid = omc23n3.filter((dato)=>dato.Codigo === data)
          setdataomcn4(omc23n4.filter((dato)=>dato.fk_Omc23N3 === selectid[0].idOmc23N3))
          setdataomcn5([])
          setdataomcn6([])
          
        }
        
      const selectOpp4 = (data)=> {
        setselectcodigo4(data)
          const selectid = omc23n4.filter((dato)=>dato.Codigo === data)
          setdataomcn5(omc23n5.filter((dato)=>dato.fk_Omc23N4 === selectid[0].idOmc23N4))
          setdataomcn6([])
        }
    
      const selectOpp5 = (data)=> {
        setselectcodigo5(data)
          const selectid = omc23n5.filter((dato)=>dato.Codigo === data)
          setdataomcn6(omc23n6.filter((dato)=>dato.fk_Omc23N5 === selectid[0].idOmc23N5))
        }


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
  
//Funcion crear omc23
const CreateOmc23Url = async(Data,idtabla,Codigo)=>{
  switch(idtabla){
    case 1:
       
      axios.post(`http://localhost:8000/apiOMC23/CrearOMC23Nivel${idtabla}/`,{
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
            fetchData()
            if(response.request.status===201){return (toast.success('EL registro se ha creado exitosamente'), console.log(response.request.status))}
            setresponse(response.request.status)
            
          })
    break;
    case 2:
      const register1 = omc23n1.filter((select)=>select.Codigo===Codigo)
      axios.post(`http://localhost:8000/apiOMC23/CrearOMC23Nivel${idtabla}/`,{
                Codigo: Data.Codigo,
                anioReg: Data.anioReg,
                definicionEng:Data.definicionEng,
                definicionSpa:Data.definicionSpa,
                descriEng:Data.descriEng,
                descriSpa: Data.descriSpa,
                ejemploEng:Data.ejemploEng,
                ejemploSpa:Data.ejemploSpa,
                regFinal:Data.regFinal,
                fk_Omc23N1:register1[0].idOmc23N1,
                }).then((response)=>{
                  fetchData()
                  if(response.request.status===201){return (toast.success('EL registro se ha creado exitosamente'))}
                  setresponse(response.request.status)})
                  
    break;
    case 3:
      const register2 = omc23n2.filter((select)=>select.Codigo===Codigo)
      axios.post(`http://localhost:8000/apiOMC23/CrearOMC23Nivel${idtabla}/`,{
        Codigo: Data.Codigo,
        anioReg: Data.anioReg,
        definicionEng:Data.definicionEng,
        definicionSpa:Data.definicionSpa,
        descriEng:Data.descriEng,
        descriSpa: Data.descriSpa,
        ejemploEng:Data.ejemploEng,
        ejemploSpa:Data.ejemploSpa,
        regFinal:Data.regFinal,
        fk_Omc23N2:register2[0].idOmc23N2,
        }).then((response)=>{
          fetchData()
          if(response.request.status===201){return (toast.success('EL registro se ha creado exitosamente'))}
          setresponse(response.request.status)})
    break;
    case 4:
      const register3 = omc23n3.filter((select)=>select.Codigo===Codigo)
      axios.post(`http://localhost:8000/apiOMC23/CrearOMC23Nivel${idtabla}/`,{
        Codigo: Data.Codigo,
        anioReg: Data.anioReg,
        definicionEng:Data.definicionEng,
        definicionSpa:Data.definicionSpa,
        descriEng:Data.descriEng,
        descriSpa: Data.descriSpa,
        ejemploEng:Data.ejemploEng,
        ejemploSpa:Data.ejemploSpa,
        regFinal:Data.regFinal,
        fk_Omc23N3:register3[0].idOmc23N3,
        }).then((response)=>{
          fetchData()
          if(response.request.status===201){return (toast.success('EL registro se ha creado exitosamente'))}
          setresponse(response.request.status)})
    break;
    case 5:
      const register4 = omc23n4.filter((select)=>select.Codigo===Codigo)
      axios.post(`http://localhost:8000/apiOMC23/CrearOMC23Nivel${idtabla}/`,{
        Codigo: Data.Codigo,
        anioReg: Data.anioReg,
        definicionEng:Data.definicionEng,
        definicionSpa:Data.definicionSpa,
        descriEng:Data.descriEng,
        descriSpa: Data.descriSpa,
        ejemploEng:Data.ejemploEng,
        ejemploSpa:Data.ejemploSpa,
        regFinal:Data.regFinal,
        fk_Omc23N4:register4[0].idOmc23N4,
        }).then((response)=>{
          fetchData()
          if(response.request.status===201){return (toast.success('EL registro se ha creado exitosamente'))}
          setresponse(response.request.status)})
    break;
    case 6:
      const register5 = omc23n5.filter((select)=>select.Codigo===Codigo)
      axios.post(`http://localhost:8000/apiOMC23/CrearOMC23Nivel${idtabla}/`,{
        Codigo: Data.Codigo,
        anioReg: Data.anioReg,
        definicionEng:Data.definicionEng,
        definicionSpa:Data.definicionSpa,
        descriEng:Data.descriEng,
        descriSpa: Data.descriSpa,
        ejemploEng:Data.ejemploEng,
        ejemploSpa:Data.ejemploSpa,
        regFinal:Data.regFinal,
        fk_Omc23N5:register5[0].idOmc23N5,
        }).then((response)=>{
          fetchData()
          if(response.request.status===201){return (toast.success('EL registro se ha creado exitosamente'))}
          setresponse(response.request.status)})
    break;
  }

}

//funcion actualizar registro omc23
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
                  fetchData()
                  if(response.request.status===200){return (toast.success('El registro se ha actualizado'))}
                  selectOpp()
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
                  fetchData()
                  console.log(selectcodigo1)
                  if(response.request.status===200){return (toast.success('El registro se ha actualizado'))}
                  selectOpp(selectcodigo1)
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
                  fetchData()                 
                  if(response.request.status===200){return (toast.success('El registro se ha actualizado'))}
                  selectOpp2(selectcodigo2)
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
                  fetchData()                  
                  if(response.request.status===200){return (toast.success('El registro se ha actualizado'))}
                  selectOpp2(selectcodigo3)
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
                  fetchData()                 
                  if(response.request.status===200){return (toast.success('El registro se ha actualizado'))}
                  selectOpp2(selectcodigo4)
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
                  fetchData()                 
                  if(response.request.status===200){return (toast.success('El registro se ha actualizado'))}
                  selectOpp2(selectcodigo5)
                  setresponse(response.request.status)})
          break;

          }
    }
    


    const value = useMemo(()=>{
      return ({
        UpdateOmc23Url,
        CreateOmc23Url,
        omc23n1,
        omc23n2,
        omc23n3,
        omc23n4,
        omc23n5,
        omc23n6,
        response,
        dataomcn2,
        dataomcn3,
        dataomcn4,
        dataomcn5,
        dataomcn6,
        selectOpp,
        selectOpp2,
        selectOpp3,
        selectOpp4,
        selectOpp5
      })
    },[omc23n1,omc23n2,omc23n3,omc23n4,omc23n5,omc23n6,response,
      dataomcn2,dataomcn3,dataomcn4,dataomcn5,dataomcn6,])

    return <Omc23Context.Provider value={value} {...props}/>
}



export function useOmc23(){
  const context = React.useContext(Omc23Context)
  if(!context) {
    throw new ('useOmc23 debe estar dentroi del provedor omc23Context')
  }

  return context;
}
