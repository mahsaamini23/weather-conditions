import {useReducer, useEffect} from 'react';
import axios
 from 'axios';

const initialState = {
    loading:true,
    error:'',
    post:{}
}

const reducer = (state, action)=>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return{
                loading:false,
                post:action.payload,
                error:""
            }
        case 'FETCH_ERROR':
            return{
                loading:false,
                post:{},
                error:"something went wrong!"
            }
        default:
            return state
    }
}
const Reducer =()=>{

    const[state, dispatch] = useReducer(reducer, initialState);

    useEffect(()=>{
        const data = axios.get('api.openweathermap.org/data/2.5/forecast?id=524901&appid=f6878e2f0ae47648aa1c87140736927d')
        .then(response=>
            {
            dispatch({type:'FETCH_SUCCESS',payload:response.data})
        })
        .catch(error=>{
            dispatch({type:'FETCH_ERROR'})
        })
    },[])
    
    return(
        <div>
            {state.loading? 'Loading' : state.post.data}
            {state.error ? state.error: null}
        </div>
    )
}

export default Reducer;