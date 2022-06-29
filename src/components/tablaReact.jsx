import React, { Fragment,useEffect,useState} from 'react'
import { useDispatch, useSelector,} from 'react-redux';
import { fetchAllUsers,fetchAllOMCN2,fetchAllOMCN3,fetchAllOMCN4,fetchAllOMCN5,fetchAllOMCN6} from '../redux/slices/users'
import Omcn1 from './omc23/omcn1'
import Omcn2 from './omc23/omcn2'
import Omcn3 from './omc23/omcn3'
import Omcn4 from './omc23/omcn4'
import Omcn5 from './omc23/omcn5'
import Omcn6 from './omc23/omcn6';
import Footer from './omc23/footer';
import ModalAdd from './modalAdd';
import ModalEdid from './omc23/ModalEdid';
import {Toaster} from 'react-hot-toast'
import { useOmc23 } from '../context/omc23/ContextOmc23';
import Aside from './omc23/aside';

export default function TablaReact() {

  //USAMOS FUNCION useSelector PARA OBTENER DATOS DEL STORE DE REDUX
  const {omcn1,omcn2,omcn3,omcn4,omcn5,omcn6} = useSelector(state => state.users)

  const mostrar = true
  const dispatch = useDispatch()
  const {UpdateOmc23Url} =  useOmc23()
   const [numeroTabla,setnumeroTabla] = useState()
   const [current,setcurrent]=useState({
    Codigo:'',
    anioReg:'',
    definicionEng:'',
    definicionSpa:'',
    descriEng:'',
    descriSpa:'',
    ejemploEng:'',
    ejemploSpa:''
   })
   


   const edidrow = (id,data)=>{
    setnumeroTabla(id)
    console.log(id)
    setcurrent({
      Codigo: data.Codigo, 
      anioReg:data.anioReg, 
      definicionEng:data.definicionEng,
      definicionSpa:data.definicionSpa,
      descriEng:data.descriEng,
      descriSpa:data.descriSpa,
      ejemploEng:data.ejemploEng,
      ejemploSpa:data.ejemploSpa
    })
  }


  
   const updateRegistro = (data)=>{
    setcurrent(data)
    switch(numeroTabla){
      case 1:{
        const idRegistro = omcn1.filter(reg=>reg.Codigo==data.Codigo)
        UpdateOmc23Url(numeroTabla,idRegistro[0].idOmc23N1,data)
      }break;
      case 2:{
        const idRegistro = omcn2.filter(reg=>reg.Codigo==data.Codigo)
        UpdateOmc23Url(numeroTabla,idRegistro[0].idOmc23N2,data,idRegistro[0].fk_Omc23N1)
      }break;
      case 3:{
        const idRegistro = omcn3.filter(reg=>reg.Codigo==data.Codigo)
        UpdateOmc23Url(numeroTabla,idRegistro[0].idOmc23N3,data,idRegistro[0].fk_Omc23N2)
      }break;
      case 4:{
        const idRegistro = omcn4.filter(reg=>reg.Codigo==data.Codigo)
        UpdateOmc23Url(numeroTabla,idRegistro[0].idOmc23N4,data,idRegistro[0].fk_Omc23N3)
      }break;
      case 5:{
        const idRegistro = omcn5.filter(reg=>reg.Codigo==data.Codigo)
        UpdateOmc23Url(numeroTabla,idRegistro[0].idOmc23N5,data,idRegistro[0].fk_Omc23N4)
      }break;
      case 6:{
        const idRegistro = omcn6.filter(reg=>reg.Codigo==data.Codigo)
        UpdateOmc23Url(numeroTabla,idRegistro[0].idOmc23N6,data,idRegistro[0].fk_Omc23N5)
      }break;
    }
    

  }


  //FUNCION useEffect SE ACTIVA CADA QUE HACEMOS UN LLAMADO A LA API  
  useEffect(()=>{
      dispatch(fetchAllUsers())
      dispatch(fetchAllOMCN2())
      dispatch(fetchAllOMCN3())
      dispatch(fetchAllOMCN4())
      dispatch(fetchAllOMCN5())
      dispatch(fetchAllOMCN6())

  },[dispatch])

  //  ESTADOS DE CAMBIOS PARA FILTRAR LOS DATOS
  const [dataomcn2,setdataomcn2] = useState([])
  const [dataomcn3,setdataomcn3] = useState([])
  const [dataomcn4,setdataomcn4] = useState([])
  const [dataomcn5,setdataomcn5] = useState([])
  const [dataomcn6,setdataomcn6] = useState([])
  
      //FUNCIONES PARA FILTRAR
      const selectOpp = (data)=> {
        setdataomcn2(omcn2.filter((dato)=>dato.fk_Omc23N1 === data))
        setdataomcn3([])
        setdataomcn4([])
        setdataomcn5([])
        
      }
  
      const selectOpp2 = (data)=> {
        setdataomcn3(omcn3.filter((dato)=>dato.fk_Omc23N2 === data))
        setdataomcn4([])
        setdataomcn5([])
        setdataomcn6([])

      }
      
      const selectOpp3 = (data)=> {
        setdataomcn4(omcn4.filter((dato)=>dato.fk_Omc23N3 === data))
        setdataomcn5([])
        setdataomcn6([])

      }
      
      const selectOpp4 = (data)=> {
        setdataomcn5(omcn5.filter((dato)=>dato.fk_Omc23N4 === data))
        setdataomcn6([])
        
      }
  
      const selectOpp5 = (data)=> {
        setdataomcn6(omcn6.filter((dato)=>dato.fk_Omc23N5 === data))
        
      }


   return (
     <Fragment>
       <div className='container marginDivTable' style={{}}>
        <Toaster
          position='bottom-right'
          toastOptions={{
            duration:3000,
            style:{
              background:'#222',
              color:'white'
            }
          }}
        />
        <Omcn1 Omcn1={omcn1} selectOpp={selectOpp} edidrow={edidrow}/>
        {dataomcn2.length>0 ?(<Omcn2 dataomcn2={dataomcn2} selectOpp2={selectOpp2} edidrow={edidrow}/>):(null)}       
        {dataomcn3.length>0  ?(<Omcn3 dataomcn3={dataomcn3} selectOpp3={selectOpp3} edidrow={edidrow}/>):(null)}  
        {dataomcn4.length>0  ?(<Omcn4 dataomcn4={dataomcn4} selectOpp4={selectOpp4} edidrow={edidrow}/>):(null)}
        {dataomcn5.length>0  ?(<Omcn5 dataomcn5={dataomcn5} selectOpp5={selectOpp5} edidrow={edidrow}/>):(null)}
        {dataomcn6.length>0 ?(<Omcn6 dataomcn6={dataomcn6}/>):(null)}
        <ModalAdd mostrar={`id${mostrar}`}/>
        <ModalEdid current={current} numeroTabla={numeroTabla} updateRegistro={updateRegistro}/>
        </div>
        <Footer/>
        <Aside/>
     </Fragment >
   )
 }