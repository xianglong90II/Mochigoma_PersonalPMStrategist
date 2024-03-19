import { ref, reactive } from 'vue'
import { defineStore} from 'pinia'


export const useSpStore = defineStore({
    id:'spStore',
    state(){
        return {
            personalStatus:reactive({
                physicalStat:ref(0),
                emoStat:ref(0)
            }),
            //stores supportive units
            spArray:reactive<any>([]),
            //stores value of each units
            spObjArray:reactive<any>([])
        }
    },
    actions:{
    },
    getters:{
        getConcentration:(state)=>{
            return state.spObjArray.reduce((acc:number, obj:any) => acc + obj.val1, 0)+state.personalStatus.emoStat
        },
        getWorkableTimeMax:(state)=>{
            return 3*state.personalStatus.physicalStat-state.spObjArray.reduce((acc:number, obj:any) => acc + obj.val3, 0)
        },
        getEnergyMax:(state)=>{
            return 2*state.personalStatus.physicalStat+state.spObjArray.reduce((acc:number, obj:any) => acc + (obj.val2==3?1:0), 0)
        },
        getEnergyLeft:(state)=>{
            return 2*state.personalStatus.physicalStat+state.spObjArray.reduce((acc:number, obj:any) => acc + (obj.val2?obj.val2-2:0), 0)
        }
    }
})
export const useWkStore = defineStore({
    id:'wkStore',
    state(){
        return{
            //stores working units
            wkArray:reactive<any>([]),
            //stores value of each units
            wkObjArray:reactive<any>([])
        }
    },
    getters:{
        getManhourPts:()=>{
            
        },
        getConcentrationMax:()=>{

        },
        getConcentrationMin:()=>{

        },
        getWorkableTimeMax:()=>{
            return useSpStore().getWorkableTimeMax
        },
        getWorkableTimeMin:()=>{

        }
    }
})