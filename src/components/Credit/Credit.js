import { Select } from '@material-ui/core'
import React, { Component } from 'react'
import './Credit.css'

export default class Credit extends Component {

    state ={
        creditAmount: '',
        creditMonth: '',
        creditPercent: '',
        payment: ''
    }

    calculateCredit = () => {
        let amount = Number(this.state.creditAmount)
        let month = Number(this.state.creditMonth)
        let percent = Number(this.state.creditPercent) /12/100
        
        let rate = Math.pow((1 + percent), month)

        console.log(rate)

        let payment = Math.round(amount * ((percent * rate) / (rate - 1)))

        this.setState({
            payment: payment ? payment : alert("Введите корректные данные")
        })

         
    }
    render() {


        return (
            <div className='creditWrapper'>
               

                <div className='calculations' >
                     <h2 style={{textAlign: 'center'}}> Рассчитать eжемесячный взнос</h2>
                
                <div className='creditInput'>
                    <div style={{marginLeft: '60px'}}>Сумма кредита</div>
                    <input placeholder='сумма кредита' type='number' className='creditField' onChange={(e) => this.setState({creditAmount: e.target.value})}/>
                </div>
                <div className='creditInput'>
                    <div style={{marginLeft: '60px'}}>Срок кредита в месяцаx</div>
                    <Select placeholder='срок кредита в месяцах' type='number' className='selectField' onChange={(e) => this.setState({creditMonth: e.target.value})} >
                        <option value='12' className='activeOption'>12</option>
                        <option value='18' className='activeOption'>18</option>
                        <option value='24' className='activeOption'>24</option>
                        <option value='36' className='activeOption'>36</option>
                        <option value='48' className='activeOption'>48</option>
                        <option value='60' className='activeOption'>60</option>
                    </Select>
                </div>
                <div className='creditInput'>
                    <div style={{marginLeft: '60px'}}>Процентная стравка, %</div>
                    <input placeholder='% ставка, годовых' type='number' className='creditField' onChange={(e) => this.setState({creditPercent: e.target.value})}/>
                </div>
                <button  className='creditBtn' onClick={() => this.calculateCredit()}> Рассчитать</button>
                <div>
                    
                </div>
                <div className='payment'>
                    
                    { this.state.payment ?
                    <div style={{display: 'flex', margin: '5px auto'}}>
                      <div style={{fontSize: '14px', fontWeight: 'bold', margin: '5px auto'}}>Ежемесячный взнос: </div> &nbsp;
                          <div>  <strong>{this.state.payment }</strong></div>
                      </div>
                    : null}

                </div>
                </div>
                <div className='creditDescription'>
                    <div>
                    
                    <div>
                    <h3>Условия кредитования:</h3>
                    <div>✔ Срок кредита до 5 лет</div>
                    <div>✔ Сумма кредита от 1000$ до 100 000 $ (эквивалент в сомах)</div>
                    <div>✔ Ставка в год - 12%</div>

                    <h3>Минимальный перечень документов:</h3>
                    <div>✔ Заявление</div>
                    <div>✔ Паспорт заявителя</div>
                    <div>✔ Документы, подтверждающие доходы Заявителя</div>
                  
                </div>
                    
                       <div> Данный рассчет является приблизительным, все подробные вопросы по кредитованию вы можете уточнить в Халык Банке.
                       </div> 
                    </div>

                    <div>

                      <div>


                        


                        📲 (999) 444 088</div>
                    </div>

                </div>
            </div>
        )
    }
}
