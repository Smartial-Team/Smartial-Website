const Strings = {
    home : {
        tab1 : {
            formItemsLabels : [
                "Altura",
                "Peso",
                "Envergadura",
                "Quantidade de Vitórias",
                "Quantidade de Knockouts",
                "Quantidade de Derrotas"
            ],
            choices : {
                category : {
                    label : "Categoria",
                    items : [
                        "Amador",
                        "Semi-Pro",
                        "Profissional"
                    ]
                },
                style : {
                    label : "Estilo",
                    items : [
                        "Muay Fimeu",
                        "Muay Khao",
                        "Muay Matt/Mahd",
                        "Muay Boo/Dan"
                    ]
                },
                userType : {
                    label : "Você é.....",
                    items : [
                        "Atleta",
                        "Promotor de Eventos",
                        "Só um visitante"
                    ]
                } 
            }
        }
    }
}
export default FormItems = [
    //Personal
    // [{fieldName: "birthDate"},{label: "Data de Nascimento", type: "date"}],
    {fieldName: "userType", label: Strings.home.tab1.choices.userType.label, type: "choices", choices: [Strings.home.tab1.choices.userType.items[0], Strings.home.tab1.choices.userType.items[1], Strings.home.tab1.choices.userType.items[2]]},
    {fieldName: "height", label: Strings.home.tab1.formItemsLabels[0], type: "float"},{label: Strings.home.tab1},
    {fieldName: "weight", label: Strings.home.tab1.formItemsLabels[1], type: "int"},
    {fieldName: "wingspan", label: Strings.home.tab1.formItemsLabels[2], type: "float"},

    //MuayThai
    {fieldName: "category", label: Strings.home.tab1.choices.category.label, type: "choices", choices: [Strings.home.tab1.choices.category.items[0], Strings.home.tab1.choices.category.items[1], Strings.home.tab1.choices.category.items[2]]},
    
    {fieldName: "victory", label: Strings.home.tab1.formItemsLabels[3], type: "int"},
    {fieldName: "knockout", label: Strings.home.tab1.formItemsLabels[4], type: "int"},
    {fieldName: "defeat", label: Strings.home.tab1.formItemsLabels[5], type: "int"},
    
    {fieldName: "style", label: Strings.home.tab1.choices.style.label, type: "choices", choices: [Strings.home.tab1.choices.style.items[0], Strings.home.tab1.choices.style.items[1], Strings.home.tab1.choices.style.items[2], Strings.home.tab1.choices.style.items[3]]}
];