import { Component } from 'react'
import { Feedback } from './feedback/Feedback'
import { Notification } from '../components/Notification/Notification';
import { Statistics } from '../components/Statistics/Statistics';


export class App  extends Component  {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  // возвращает массив имен собственных перечислимых свойств данного объекта
  arrayKeys = Object.keys(this.state);
  

  options = this.arrayKeys;

  addFeedbackСlick = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

 TotalFeedback = () =>{
  const { good, neutral, bad } = this.state;
    return good + neutral + bad;
    
 }
 PositiveFeedback = () => {
  return Math.round((this.state.good / this.TotalFeedback()) * 100) ;
};



      render(){
const { good, neutral, bad} = this.state

        return (
    <div>
      <h1> Please leave feedback</h1>
      <Feedback
      options={this.arrayKeys}
      onLeaveFeedback={this.addFeedbackСlick}
      />
      {this.TotalFeedback() === 0 ? (<Notification/>) : (
      <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.TotalFeedback()}
              positiveFeedback={this.PositiveFeedback()}
            />)
           } 
    </div>
  );
      }
      
  
};


