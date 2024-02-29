
import Feedback from "../../components/Feedback/Feedback";
import Input from "../../components/Input/Input";
import { useState } from "react"; 
function Homework21()
{
    const [likes, setLike] = useState<number>(0);
    const [dislikes, setDislike] = useState<number>(0);

  // Создаем функцию, которая будет увеличивать наш count на 1
  const onLike = () => {
    setLike((prevValue) => {
      return prevValue + 1;
    });
  };

  // Создаем функцию, которая будет уменьшать наш count на 1
  const onDislike = () => {
    setDislike((prevValue) => 
    {
       return prevValue+1;
    });

  };
  //create function which throw likes
  const resertResults= () =>
  {
    setLike(0);
    setDislike(0);
   };

  return (
    <div>
      Homework21: Feedback
      <Feedback likes={likes} dislikes={dislikes} onDislike={onDislike} onLike={onLike} resetResults={resertResults}/>
    </div>
  );
}
export default Homework21;
