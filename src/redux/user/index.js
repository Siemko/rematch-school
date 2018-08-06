import produce from "immer" 

export default {
    state: {
        list: [
            {id: 999, name: 'Artur Swobodson, imie starczy', age: 2},
        ],
    },
    reducers: {
        addUser(state, payload) {
            return produce(state, draft => {
                draft.list.push(payload)
            } )
        },
        setList(state, payload) {
            return produce(state, draft => {
                draft.list = state.list.concat(payload)
            })
        }
    },
    effects: {
        async fetchUserList() {
            const res = await fetch('https://api.myjson.com/bins/1hky5k')
            const json = await res.json()
            this.setList(json)
        }
    }
}