
export  function Statistics({
    
    good,
    neutral,
    bad,
    total,
    positiveFeedback,
  }) {
    return (
      <div>
        <h2>Statistics</h2>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
        </ul>
        <ul>
          <li>Total feedbacks: {total}</li>
          <li>Positive feedback: {positiveFeedback}%</li>
        </ul>
      </div>
    );
  }