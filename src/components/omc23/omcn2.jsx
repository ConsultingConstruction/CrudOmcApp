import { Button } from 'bootstrap';
import React, { useMemo,useState,Fragment } from 'react'
import { useTable,usePagination,useGlobalFilter,useSortBy } from 'react-table'
import GlobalFilter from '../GlobalFilter';
import { useOmc23 } from '../../context/omc23/ContextOmc23';


export default function Omcn2(props){
  
  const{NivelForm,UpdateOmc23} = useOmc23()

 
   const data = useMemo(()=>props.dataomcn2,[props.dataomcn2])

   const columns = React.useMemo(
     () => [
      {
        Header: "Index",
        accessor: "",
        Cell: (row) => {
          return <div>{Number(row.row.id) + 1}</div>;
        },
        style:{
          textAlign:'center'
        }
    },

      {
        Header: 'Código',
        accessor: 'Codigo',
        className:'Codigo',
         style: {
          width:'100px',
        },
      },
      {
       Header: 'Descripción en Inglés',
       accessor: 'descriEng',
     },
     {
       Header: 'Descripción en Español',
       accessor: 'descriSpa',
     },
     {
       Header: 'Definición en Inglés',
       accessor: 'definicionEng',
     },
     {
       Header: 'Definición en Español',
       accessor: 'definicionSpa',
     },
     {
       Header: 'Ejemplo en Inglés',
       accessor: 'ejemploEng',
     },
     {
       Header: 'Ejemplo en Español',
       accessor: 'ejemploSpa',
     },
     {
       Header: 'Año de Registro',
       accessor: 'anioReg',
     },
     {
      Header: 'Registro final',
      accessor: 'regFinal',
    },
     ],
     []
   )

   const tableHooks = (hooks)=>{
    hooks.visibleColumns.push((columns)=>[
      ...columns,{
        id:'Edit',
        Header:'Editar',
        Cell:({row})=>(
          <button type='button' className='btn btn-success' data-bs-toggle="modal" data-bs-target='#modalEditar' onClick={()=>props.edidrow(2,row.values)}> Edit</button>
              
          
        )
      }
    ])
   }
   

   
 const {
  getTableProps,
  getTableBodyProps,
  headerGroups,
  page,
  nextPage,
  previousPage,
  pageOptions,
  prepareRow,
  state:{pageIndex,pageSize},
  state,
  setGlobalFilter,
} = useTable({ columns, data},useGlobalFilter,useSortBy,
     usePagination,tableHooks,)

       const{globalFilter} = state
      
     return(
        <Fragment>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
     <table {...getTableProps()} className='table  table-hover mt-1 shadow-lg'>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()} >
             {headerGroup.headers.map(column => (
               <th scope="col"
                 {...column.getHeaderProps(column.getSortByToggleProps())}
               >
                 {column.render('Header')}
                 {column.isSorted ? (column.isSortedDesc ? <i className="fa-solid fa-angle-down"></i>:<i className="fa-solid fa-angle-up"></i>):''}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {page.map(row => {
           prepareRow(row)
           return (
            <tr style={{fontSize:'12px', fontFamily:'arial'}} {...row.getRowProps()} onClick={()=>props.selectOpp2(row.original.Codigo) }>
              
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps([{
                      className: cell.column.className,
                      style: cell.column.style,
                    },])}
                   > 
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
     <div style={{textAlign:'center'}}>
     <button type="button" className="btn btn-light" onClick={()=>previousPage()}>Previous</button><button type="button" className="btn btn-light" onClick={()=>nextPage()}>Next</button>
     <br/>
     <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
    </div>
    <br/>

     </Fragment>
     );

}