import { Component } from 'react'
import { FeedbackOptions } from '../components/feedback/Feedback'
import { Notification } from '../components/Notification/Notification';
import { Statistics } from '../components/Statistics/Statistics';
import { Section } from '../components/Section/SectionTitle';


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
 positivePercentage = () => {
  return Math.round((this.state.good / this.TotalFeedback()) * 100) ;
  
};



      render(){
const { good, neutral, bad} = this.state

        return (
    <div>
      <Section title="Please, leave feedback">
      <FeedbackOptions
      options={this.arrayKeys}
      onLeaveFeedback={this.addFeedbackСlick}
      />
      {this.TotalFeedback() === 0 ? (<Notification message="There is no feedback"/>) : (
      <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.TotalFeedback()}
              positivePercentage={this.positivePercentage()}
            />)
           } 
      </Section>
    </div>
  );
      }
      
  
};


