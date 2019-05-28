// Задача 2. Розробити реєстратор замовлень. У компонент буде 
// передаватися у вигляді масиву об’єктів інформація про перші страви та другі 
// страви (назва страви, вартість, час очікування). Користувач вибирає страви і 
// внизу сторінки у вигляді таблиці виводиться інформація про
// // зроблені замовлення та загальна вартість замовлення
import React from 'react';
import Row from './Row'

const TableWithDishes = ({ dishes }) => {
    // myClick(){
    //     return(
    //         <>
    //         <table border="1">
    //             <tr >
    //                 <td>Назва страви</td>
    //                 <td>Вартість</td>
    //                 <td>Час очікування</td>
    //             </tr>
    //                {dishes.map((dish, i) => "тут мають виводитись тільки ті страви які cheked")}            
    //         </table>
    //     </>
    //     )
    // }

    return (
        <>
            <table border="1">
                <tr >
                    <td>Назва страви</td>
                    <td>Вартість</td>
                    <td>Час очікування</td>
                </tr>
                {dishes.map((dish, i) => <Row {...dish} />)}
            </table>
            <button >
                Show
            </button>
        </>
    );
}

export default TableWithDishes;

// import React, { Component } from 'react';
// class InfiList extends Component {
//     constructor(props) {
//         super(props);
  
//     }
//     myClick=(dishes)=>{
  
//         return(
//             <>
//             <table border="1">
//                 <tr >
//                     <td>Назва страви</td>
//                     <td>Вартість</td>
//                     <td>Час очікування</td>
//                 </tr>
//                    {dishes.map((dish, i) => "тут мають виводитись тільки ті страви які cheked")}            
//             </table>
//         </>
//         )
//     }
    
//     render() { 
        
//         const {dishes} =this.state
//         return ( 
//             <>
//                          <table border="1">
//                             <tr >
//                                  <td>Назва страви</td>
//                                  <td>Вартість</td>
//                                  <td>Час очікування</td>
//                              </tr>
//                              {dishes.map((dish, i) => <Row {...dish} />)}
//                          </table>
//                          <button onClick={this.myClick}>>
//                              Show
//                          </button>
//                      </>
//          );
//     }
// }
 
// export default InfoList;
