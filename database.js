const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

const criarBanco = async () => {
  const db = await open({
    filename: "./database.db",
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS pacientes(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        idade TEXT,
        contato TEXT,
        endereco TEXT,
        autonomia TEXT,
        medicacoes TEXT,
        pessoaResponsavel TEXT,
        numeroDeEmergencia TEXT,
        hobbies TEXT,
        alergia TEXT,
        historicoDeAcompanhamento TEXT,
        atualizacoesDeVisitas TEXT,
        foto TEXT
  )
    `);

  console.log(
    "Banco de dados configurado. A tabela de registro de pacientes esta pronta!",
  );

  await db.exec(`
      INSERT INTO pacientes (nome, idade, contato, endereco, autonomia, medicacoes, pessoaResponsavel, numeroDeEmergencia, hobbies, alergia, historicoDeAcompanhamento, atualizacoesDeVisitas, foto) VALUES
      ('Alberto Figueira', '70', '917321578', 'Rua Campinas, 147' , 'Dependente' , 'Enalapril - 200mg 24/24h, Donepezilo - 500mg 12/12h, Paracetamol - 250mg quando sente dor' , 'Marcos Figueira' , '911548956' , 'Cantar e Assitir', 'Sem alergias' , '07/02/2025' , 'Reclamou de olhos pesados', ' https://thumbs.dreamstime.com/b/homem-idoso-24922470.jpg '),


      ('Sandra Faria', '85', '987264539', 'Praça da Luz Amarela, 45', 'Estavel' , 'Medicação apenas quando sente dor(analgésicos)' , 'Sandrine Faria' , '964873125', 'Jardinagem e cozinhar', 'Frutos do mar' , '04/05/2025' , 'Reclamou que queria comer frutos do mar', 'https://static.vecteezy.com/ti/fotos-gratis/t2/77569348-senior-mulher-enfermeira-e-vidro-para-bebendo-agua-em-sofa-com-sede-remedio-e-bem-estar-dentro-vivo-sala-pessoas-cuidador-e-idosos-paciente-com-saude-desintoxicacao-e-intestino-saude-em-sofa-dentro-casa-foto.jpg' )
      `);
};
criarBanco();
