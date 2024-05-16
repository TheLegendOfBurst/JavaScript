// Importa o Phaser
import Phaser from 'phaser';

// Define as configurações do jogo
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

// Inicializa o jogo com as configurações fornecidas
const game = new Phaser.Game(config);

// Variáveis globais
let player;
let cursors;

// Função de pré-carregamento - carrega os recursos necessários para o jogo
function preload() {
    // Carrega uma imagem para representar o personagem (você pode substituir por um sprite do Mario)
    this.load.image('mario', 'assets/mario.png');
}

// Função de criação - cria os elementos iniciais do jogo
function create() {
    // Adiciona o personagem jogável (um retângulo vermelho por enquanto)
    player = this.add.rectangle(100, 450, 50, 50, 0xff0000);

    // Habilita física para o personagem
    this.physics.add.existing(player);

    // Configura as teclas de seta como controles do jogador
    cursors = this.input.keyboard.createCursorKeys();
}

// Função de atualização - chamada a cada quadro do jogo
function update() {
    // Movimento horizontal do jogador
    if (cursors.left.isDown) {
        player.body.setVelocityX(-200); // Move para a esquerda
    } else if (cursors.right.isDown) {
        player.body.setVelocityX(200); // Move para a direita
    } else {
        player.body.setVelocityX(0); // Para de se mover
    }

    // Salto do jogador
    if (cursors.up.isDown && player.body.touching.down) {
        player.body.setVelocityY(-300); // Salta apenas se estiver tocando o chão
    }
}
