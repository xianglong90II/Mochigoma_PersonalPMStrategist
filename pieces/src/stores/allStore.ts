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
        getManhourPts:(state)=>{
            return state.wkObjArray.reduce((accumulator:number, currentValue:any) => {
                // mutiply and sum
                return accumulator + currentValue.val1 * currentValue.val2;
            }, 0)
        },
        getConcentrationMax:()=>{
            return useSpStore().getConcentration
        },
        getConcentrationLeft:(state)=>{
            return useSpStore().getConcentration - state.wkObjArray.reduce((acc:number, obj:any) => acc + obj.val1, 0)
        },
        getWorkableTimeMax:()=>{
            return useSpStore().getWorkableTimeMax
        },
        getWorkableTimeLeft:(state)=>{
            return useSpStore().getWorkableTimeMax - state.wkObjArray.reduce((acc:number, obj:any) => acc + obj.val2, 0)
        }
    }
})
export const useObjStore = defineStore({
    id:'objStore',
    state(){
        return {
            //stores objective units
            objArray:reactive<any>([]),
            //stores value of each units
            objObjArray:reactive<any>([])
        }
    },
    getters:{
        getFunctionPoints:(state)=>{
            return state.objObjArray.reduce((accumulator:number, currentValue:any) => {
                // mutiply and sum
                return accumulator + currentValue.val1 * currentValue.val2;
            }, 0);
        },
        getManhourAvailableMax:()=>{
            return useWkStore().getManhourPts
        },
        getManhourAvailableLeft:(state)=>{
            return useWkStore().getManhourPts-state.objObjArray.reduce((accumulator:number, currentValue:any) => {
                // mutiply and sum
                return accumulator + currentValue.val1 * currentValue.val2;
            }, 0);
        }
    }
})
export const useCreditStore = defineStore({
    id:'creditStore',
    state(){
        return{
        }
    },
    getters:{
        getEfficiency:()=>{
            //how workable time spent/ function points solved
            //less time you spent, more you efficient
            //more function points solved, more you efficient
            //(fp solved/ workable time spent) *100
            return ((useObjStore().getFunctionPoints/(useWkStore().getWorkableTimeMax - useWkStore().getWorkableTimeLeft))*50).toFixed(1)
        },
        getFeasibility:()=>{
            //how many man-hour pts left after all tasks done
            //manhourLeft/manhourMax * 100
            return (useObjStore().getManhourAvailableLeft/useObjStore().getManhourAvailableMax*100).toFixed(1)
        },
        getSatisfaction:()=>{
            //how many concentration, energy, sparetime remains
            let concentrationRemain=useWkStore().getConcentrationLeft/useWkStore().getConcentrationMax
            let energyRemain=useSpStore().getEnergyLeft/useSpStore().getEnergyMax
            let spareTimeRemain=useWkStore().getWorkableTimeLeft/useWkStore().getWorkableTimeMax
            return ((concentrationRemain+energyRemain+spareTimeRemain)/3*100).toFixed(1)
        }
    }
})