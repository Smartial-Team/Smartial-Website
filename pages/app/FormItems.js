const FormItems = [
    //Personal
    // [{fieldName: "birthDate"},{label: "Data de Nascimento", type: "date"}],
    {fieldName: "height", label: "Altura", type: "float"},
    {fieldName: "weight", label: "Peso", type: "int"},
    {fieldName: "wingspan", label: "Envergadura", type: "float"},

    //MuayThai
    {fieldName: "category", label: "Categoria", type: "choices", choices: [
        "Amador",
        "Semi-Pro",
        "Profissional"
    ]},
    
    {fieldName: "victory", label: "Vitorias", type: "int"},
    {fieldName: "knockout", label: "Derrotas", type: "int"},
    {fieldName: "defeat", label: "Knockouts", type: "int"},
    
    {fieldName: "style", label: "Estilo", type: "choices", choices: [
        "Muay Fimeu",
        "Muay Khao",
        "Muay Matt/Mahd",
        "Muay Boo/Dan"
    ]}
];

export default FormItems;