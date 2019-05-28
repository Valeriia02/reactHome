import React, { Component } from 'react';

class CreditCalc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    onChange = () => {
        let cSum = parseFloat(this.refs.creditSum.value)
        let monthCount =parseInt (this.refs.monthCount.value)
        let total = this.refs.total
        let monthlyMoney = this.refs.monthlyMoney
        total.value = cSum +(cSum* 0.25)
        monthlyMoney.value =total.value / monthCount
    }

    render() { 
        return (
            <div>
                Credit calculator
                <br/>
                Сума кредиту:
                <input ref="creditSum" type="text" onChange={this.onChange} />
                <br />
                Кількість місяців: 
                <input ref="monthCount" type="text" onChange={this.onChange} />
                <br />
                Сума щомісячного платежу:
                <input ref="monthlyMoney" type="text"/>
                <br />
                Загальна переплата:
                <input ref="total" type="text"  />
            </div>
        );
    }
}
 
export default CreditCalc;