import api from "./api";

export const fetchEmployee = async() =>{
    const response =await api.get('/employee');
    return response.data;

};

export const addEmployee = async() =>{
    const response = await api.post('/employee');
    return response.data;
};

export const updateEmployee =async() =>{
    const response = await api.put('/employee/{id}')
    return response.data;
};

export const deleteEmployee = async() =>{
    const response = await api.delete('/employee/{id}')
}