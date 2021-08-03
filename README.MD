comando docker para rodar a imagem do sonic

sudo docker run -p 1491:1491 -v /home/felipe/Documentos/buscaDeDadosRust/sonic/sonic.cfg:/etc/sonic.cfg -v /home/felipe/Documentos/buscaDeDadosRust/sonic/store -d valeriansaliou/sonic:v1.3.0

Detalhes do sonic 

https://github.com/valeriansaliou/sonic