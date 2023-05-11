$(function () {

    let palavras = ["\"Eu não me importo com o livro que você lê, ou no que você acredita. Se você não tiver amor, se você não amar o seu próximo, então, você não tem nada.\"", "\"NADA na vida vale a pena, a menos que você assuma riscos. Caia para frente. Cada experiência de fracasso é um passo mais perto do sucesso.\"", "\"Objetivos no caminho para a realização não podem ser alcançados sem disciplina e consistência.\"", "\"Por que fechamos nossos olhos quando oramos, choramos, beijamos ou sonhamos? Porque as coisas mais bonitas da vida não são vistas, mas sentidas pelo coração.\"","\"Coloque Deus primeiro em tudo que você faz ... tudo o que tenho é pela graça de Deus, entenda isso. É um presente ... Eu nem sempre estive com ele, mas ele sempre ficou comigo.\"","\"Eu digo sorte é quando uma oportunidade aparece e você está preparado para isso.\"","\"Talento vem de Deus. Se você recebeu algum, deve valorizá-lo, cultivá-lo, trabalhar e desenvolvê-lo.\"","\"A Bíblia diz: Fé sem obras não é nada. Então o destino é ótimo, a fé é ótima - mas você ainda tem que trabalhar nisso. Eu não sento apenas em casa e espero que tudo se desdobre.\""]
    let inicio = 0
    let intervalo =16000

    $('.citation').text(palavras[inicio++])

        setInterval(function() {

        },intervalo);

        setInterval(function() {

            $('.citation').fadeOut(function() {
                
                if(inicio >= palavras.length) {
                    inicio=0;
            }
            $(this).text(palavras[inicio++]).fadeIn();
        });
        },intervalo);
    });