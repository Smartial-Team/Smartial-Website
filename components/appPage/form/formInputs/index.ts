const formInputs = [
	//Personal
	// [{fieldName: "birthDate"},{label: "Data de Nascimento", type: "date"}],
	{
		label: 'Nome',
		type: 'text',
		id: 'name',
		name: 'name',
	},
	{
		label: 'Idade',
		type: 'number',
		id: 'age',
		name: 'age',
	},
	{
		label: 'Estado',
		type: 'select',
		id: 'state',
		name: 'state',
	},
	{
		label: 'Cidade',
		type: 'select',
		id: 'city',
		name: 'city',
	},
	{
		label: 'Altura',
		type: 'number',
		id: 'height',
		name: 'height',
	},
	{
		label: 'Peso',
		type: 'number',
		id: 'weight',
		name: 'weight',
	},
	{
		label: 'Envergadura',
		type: 'number',
		id: 'wingspan',
		name: 'wingspan',
	},

	//MuayThai
	{
		label: 'Categoria',
		type: 'select',
		choices: ['Amador', 'Semi-Pro', 'Profissional'],
		id: 'category',
		name: 'category',
	},

	{
		label: 'Vitórias',
		type: 'number',
		id: 'victories',
		name: 'victories',
	},
	{
		label: 'Knockouts',
		type: 'number',
		id: 'knockouts',
		name: 'knockouts',
	},
	{
		label: 'Derrotas',
		type: 'number',
		id: 'defeats',
		name: 'defeats',
	},

	{
		label: 'Estilo',
		type: 'select',
		choices: ['Muay Fimeu', 'Muay Khao', 'Muay Matt/Mahd', 'Muay Boo/Dan'],
		id: 'style',
		name: 'style',
	},
];

export default formInputs;
