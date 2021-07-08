hooks is a function which let us hook into function component

usestate works as setstate function

useeffect work as componentdidmount+componentdidupdate+componentwillunmounte


in react if we want to pass something from one level to another level then we use the help of props to pass it to diffreent level but contextaAPI provies a way to pass it directly



ContextApi----> Context is provides a way to pass the data through the component tree without having to pass props down manually at every level

When to use Context ??

 context is designed to share the data thta can be considered as global for a tree of react components
      eg- Authunticate user, theme

      context---> for creating a context we use createcontext
      
      const Mycontext=React creatContext(default value);
      
          --------->it create a  context object 

      consumption--> to consume that context value we have to use the usecontext

      const val = useContext(Mycontext);



usecontext---> By using usecontext we can  update Mycontext value by importing but if we want to make some changes in it then we have to use <Mycontext.provider></Mycontext.provider>