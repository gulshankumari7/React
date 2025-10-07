function student(props){
  return <h2>My name is  {props.name} and i am {props.course}</h2>  
}
export default function app(){
return(
<div>
    <student name =" Gulshan" course =" MCA "/>
    <student name ="Divya" course =" BTECH"/>
</div>
);
}