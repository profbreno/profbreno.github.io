const TABS = 18

const content = [
    {
        conteudo: 'RevisÃ£o / Entrada e SaÃ­da',
        material: '<a href="http://www.gileduardo.com.br/ifpr/lp/downloads/lp_aula04.pdf" target="_blank">Material DidÃ¡tico</a>',
        video: [
            {
                titulo: 'Estrutura - Arquivo C',
                meet: 'https://drive.google.com/file/d/1COO7hAInaFju9jeYEj-8faMgzijaAn9P/view?usp=sharing'
            },
            {
                titulo: 'scanf() - int',
                meet: 'https://drive.google.com/file/d/1DzQrpVD4xEVwid6T9RmVTWrwh3k468Sc/view?usp=sharing'
            },
            {
                titulo: 'scanf() - float',
                meet: 'https://drive.google.com/file/d/1SmAXLdg7gf7uWJUUa_5LJU1TA2AtSf-t/view?usp=sharing'
            },
            {
                titulo: 'scanf() - char',
                meet: 'https://drive.google.com/file/d/1SOLuEfzpGVbOBwq8uyl5qzePp57bn9ej/view?usp=sharing'
            },
            {
                titulo: 'getchar()',
                meet: 'https://drive.google.com/file/d/1HNYKOHKSIvcTVTVvSFx5vcg047HM1JD6/view?usp=sharing'
            },
            {
                titulo: 'ResoluÃ§Ã£o: Ex01',
                meet: 'https://drive.google.com/file/d/1jjvhP914KeojKFBnUTUJrfUe5CXhjxxU/view?usp=sharing'
            },
            {
                titulo: 'ResoluÃ§Ã£o: Ex02',
                meet: 'https://drive.google.com/file/d/1rqaj0iwKb2g3NDBNJCNwfxZ15LRnh4Ng/view?usp=sharing'
            },
        ],
        atividade: '<a href="http://www.gileduardo.com.br/ifpr/lp/rde/arquivos/atv01.pdf" target="_blank">Atividade PrÃ¡tica</a>',
        fonte: '<a href="http://www.gileduardo.com.br/ifpr/pci/rde/arquivos/code01.zip" target="_blank">CÃ³digo Exemplo</a>',
        encontro: '<a href="https://meet.google.com/hrv-ynju-fdu" target="_blank">Encontro: <b>05/Nov</b></a>',
        atendimento: '<a href="https://meet.google.com/yyu-gneo-dyn" target="_blank">Atendimento: <b>10/Nov</b></a>',
    },
    {
        conteudo: 'CondiÃ§Ã£o',
        material: '<a href="http://www.gileduardo.com.br/ifpr/lp/downloads/lp_aula06.pdf" target="_blank">Material DidÃ¡tico</a>',
        video: [
            {
                titulo: 'if()/else{}',
                meet: 'https://drive.google.com/file/d/16hGjjw_kfgBnwkslBjXVQb4eiIDd-GYo/view?usp=sharing'
            },
            {
                titulo: 'Ex.: DepÃ³sito 1',
                meet: 'https://drive.google.com/file/d/1rtj6QCgkzlNbBsRU7N_cfZcVJ9UZB4Qx/view?usp=sharing'
            },
            {
                titulo: 'Ex.: DepÃ³sito 2',
                meet: 'https://drive.google.com/file/d/1uzZdogH0jL8QpTOM2PnpwPWdUn1H5IdG/view?usp=sharing'
            },
            {
                titulo: 'Ex.: DepÃ³sito 3',
                meet: 'https://drive.google.com/file/d/1Itmx028qfbV_oLR6fHaquIY3pcgseWaJ/view?usp=sharing'
            },
            {
                titulo: 'switch()',
                meet: 'https://drive.google.com/file/d/1jp3_TmwGzt6V63eGlXDWQN9T4PGtJoGz/view?usp=sharing'
            },
            {
                titulo: 'ResoluÃ§Ã£o: Ex01',
                meet: 'https://drive.google.com/file/d/1RWUsKAtL4Vk0IQ4nyQ4DPKI3Azc7vYTK/view?usp=sharing'
            },
            {
                titulo: 'Operador &&',
                meet: 'https://drive.google.com/file/d/1oP3_L5s2trM3zLTSqsDbRv8_4dl-826C/view?usp=sharing'
            },
            {
                titulo: 'Operador ||',
                meet: 'https://drive.google.com/file/d/1XmVkm_XXNiPG6f4ySyEVD_uYYEO9Iedl/view?usp=sharing'
            },
            {
                titulo: 'ResoluÃ§Ã£o: Ex02',
                meet: 'https://drive.google.com/file/d/1RK0O_e6H3aP39Q4ZY49ioMML4wLC6y_Y/view?usp=sharing'
            },
        ],
        atividade: '<a href="http://www.gileduardo.com.br/ifpr/lp/rde/arquivos/atv02.pdf" target="_blank">Atividade PrÃ¡tica</a>',
        fonte: '<a href="http://www.gileduardo.com.br/ifpr/pci/rde/arquivos/code02.zip" target="_blank">CÃ³digo Exemplo</a>',
        encontro: '<a href="https://meet.google.com/hrv-ynju-fdu" target="_blank">Encontro: <b>12/Nov</b></a>',
        atendimento: '<a href="https://meet.google.com/yyu-gneo-dyn" target="_blank">Atendimento: <b>17/Nov</b></a>',
    },
    {
        conteudo: 'LaÃ§o de RepetiÃ§Ã£o - 1Âª Parte',
        material: '<a href="http://www.gileduardo.com.br/ifpr/lp/downloads/lp_aula07.pdf" target="_blank">Material DidÃ¡tico</a>',
        video: [
            {
                titulo: 'while() - bÃ¡sico',
                meet: 'https://drive.google.com/file/d/1vd0UO5OCfSrxP-BLg8Jg-fE-CPbaDSs9/view?usp=sharing'
            },
            {
                titulo: 'while() - int/char',
                meet: 'https://drive.google.com/file/d/16eKtcY8cnmYOnyfwEiOgGP8zrPwSCVOR/view?usp=sharing'
            },
            {
                titulo: 'do-while()',
                meet: 'https://drive.google.com/file/d/10X0XfaxRHyYkE2UIybuva4SrKdgAaYRv/view?usp=sharing'
            },
            {
                titulo: 'Ex.03 / while()',
                meet: 'https://drive.google.com/file/d/18GOKwOz9SkTp3nZd2PE4VkbDtjGFZtpM/view?usp=sharing'
            },
            {
                titulo: 'Ex.03 / do-while()',
                meet: 'https://drive.google.com/file/d/1yyUnvsntuanFM_1PLZvmCvlItKVSJ1CN/view?usp=sharing'
            },
        ],
        atividade: '<a href="http://www.gileduardo.com.br/ifpr/lp/rde/arquivos/atv03.pdf" target="_blank">Atividade PrÃ¡tica</a>',
        fonte: '<a href="http://www.gileduardo.com.br/ifpr/pci/rde/arquivos/code03.zip" target="_blank">CÃ³digo Exemplo</a>',
        encontro: '<a href="https://meet.google.com/hrv-ynju-fdu" target="_blank">Encontro: <b>19/Nov</b></a>',
        atendimento: '<a href="https://meet.google.com/yyu-gneo-dyn" target="_blank">Atendimento: <b>14/Nov</b></a>',
    },
    {
        conteudo: 'LaÃ§o de RepetiÃ§Ã£o - 2Âª Parte',
        material: '<a href="http://www.gileduardo.com.br/ifpr/lp/downloads/lp_aula07.pdf" target="_blank">Material DidÃ¡tico</a>',
        video: [
            {
                titulo: 'for() - bÃ¡sico',
                meet: 'https://drive.google.com/file/d/1ZzY-lB2hdSFc3xbPPAppMgWEf43nvQIE/view?usp=sharing'
            },
            {
                titulo: 'for() - int',
                meet: 'https://drive.google.com/file/d/1bpqm6eDhTGBg2GE5lcW54231x58fmMlV/view?usp=sharing'
            },
            {
                titulo: 'for() - parÃ¢metros',
                meet: 'https://drive.google.com/file/d/1gPB7IKmHZExG7h4_pcBamFh3JpDlKXTn/view?usp=sharing'
            },
            {
                titulo: 'for() - char',
                meet: 'https://drive.google.com/file/d/1SztNFr7mDh9z1XCrOcOaQA1vjKnlQ4HJ/view?usp=sharing'
            },
            {
                titulo: 'for() - encadeado',
                meet: 'https://drive.google.com/file/d/1gX-Ei3TGIvKfklCBpwQWIo-_pbFRUyhr/view?usp=sharing'
            },
            {
                titulo: 'for() - debug',
                meet: 'https://drive.google.com/file/d/1WhbsDe1UrB0XceYJHMLxGOgfkdNZMNSj/view?usp=sharing'
            },
            {
                titulo: 'ResoluÃ§Ã£o: Ex02',
                meet: 'https://drive.google.com/file/d/1-m_G0htusyJNRCv1CMJAyv2J6GRvhTrn/view?usp=sharing'
            },
            {
                titulo: 'ResoluÃ§Ã£o: Ex05',
                meet: 'https://drive.google.com/file/d/1e_fJVwq6QSHwt_eUqvuOHsWMA9_6c59R/view?usp=sharing'
            },
        ],
        atividade: '<a href="http://www.gileduardo.com.br/ifpr/lp/rde/arquivos/atv04.pdf" target="_blank">Atividade PrÃ¡tica</a>',
        fonte: '<a href="http://www.gileduardo.com.br/ifpr/pci/rde/arquivos/code04.zip" target="_blank">CÃ³digo Exemplo</a>',
        encontro: '<a href="https://meet.google.com/hrv-ynju-fdu" target="_blank">Encontro: <b>26/Nov</b></a>',
        atendimento: '<a href="https://meet.google.com/yyu-gneo-dyn" target="_blank">Atendimento: <b>01/Dez</b></a>',
    },
    {
        conteudo: 'Vetor',
        material: '<a href="http://www.gileduardo.com.br/ifpr/lp/downloads/lp_aula09.pdf" target="_blank">Material DidÃ¡tico</a>',
        video: [
            {
                titulo: 'Vetor - bÃ¡sico',
                meet: 'https://drive.google.com/file/d/1_X0uPNFnjaTnbZcc4DPwMlPDYehzs_6r/view?usp=sharing'
            },
            {
                titulo: 'Nr. AleatÃ³rio - rand()',
                meet: 'https://drive.google.com/file/d/1HtZUN1Jx4n637tjECVv_BERH1dbFAiZF/view?usp=sharing'
            },
            {
                titulo: 'Percorrer - vetor',
                meet: 'https://drive.google.com/file/d/1Gu-IVhRByeIHcTYA23jHsMv0_TPfGS_P/view?usp=sharing'
            },
            {
                titulo: 'Percorrer - debug',
                meet: 'https://drive.google.com/file/d/15m3sEWGO7L5ejL3OuN5DHmdi6PastlZu/view?usp=sharing'
            },
            {
                titulo: 'Constante - #define',
                meet: 'https://drive.google.com/file/d/1gOPCL9JhmYk0r6dp2aQyfhOTogW7ao1-/view?usp=sharing'
            },
            {
                titulo: 'ResoluÃ§Ã£o: Ex01',
                meet: 'https://drive.google.com/file/d/1eQNvn4t9n3XbtVVLjyUVkbf7iRNsWznv/view?usp=sharing'
            },
            {
                titulo: 'Vetor - char',
                meet: 'https://drive.google.com/file/d/16Jd46Bc4znhR1MVwINNFpjiv1ODBFL7x/view?usp=sharing'
            },
            {
                titulo: 'FunÃ§Ã£o gets()',
                meet: 'https://drive.google.com/file/d/16aeyruHzhmju57B3zwkYkirKCeDjSVa3/view?usp=sharing'
            },
            {
                titulo: 'Final de String',
                meet: 'https://drive.google.com/file/d/1a0z0vK7zmLicAdZRAoceW0ycFfQ9z-NY/view?usp=sharing'
            },
            {
                titulo: 'String - debug',
                meet: 'https://drive.google.com/file/d/111BpVwxi8iOqJYWaYauYx8eEbmeHe6tL/view?usp=sharing'
            },
            {
                titulo: 'ResoluÃ§Ã£o: Ex04',
                meet: 'https://drive.google.com/file/d/10LgDHoor3jtuWW-eedeLAyKUpi9cgMYh/view?usp=sharing'
            },
        ],
        atividade: '<a href="http://www.gileduardo.com.br/ifpr/lp/rde/arquivos/atv05.pdf" target="_blank">Atividade PrÃ¡tica</a>',
        fonte: '<a href="http://www.gileduardo.com.br/ifpr/pci/rde/arquivos/code05.zip" target="_blank">CÃ³digo Exemplo</a>',
        encontro: '<a href="https://meet.google.com/hrv-ynju-fdu" target="_blank">Encontro: <b>03/Dez</b></a>',
        atendimento: '<a href="https://meet.google.com/yyu-gneo-dyn" target="_blank">Atendimento: <b>08/Dez</b></a>',
    },
    {
        conteudo: 'Matriz',
        material: '<a href="http://www.gileduardo.com.br/ifpr/lp/downloads/lp_aula10.pdf" target="_blank">Material DidÃ¡tico</a>',
        video: [
            {
                titulo: 'Matriz - bÃ¡sico',
                meet: 'https://drive.google.com/file/d/1FYV7U8yRNvrhaSIGK3iyahmeMYrWmHLA/view?usp=sharing'
            },
            {
                titulo: 'Percorrer - matriz',
                meet: 'https://drive.google.com/file/d/1YsFr0lMNNwPX05pWZDZa-dmcrETn88Dw/view?usp=sharing'
            },
            {
                titulo: 'Percorrer - debug',
                meet: 'https://drive.google.com/file/d/1giiQsFhvgxdMjMSBLQ1nRHr8dfvF8vvb/view?usp=sharing'
            },
            {
                titulo: 'Matriz - string',
                meet: 'https://drive.google.com/file/d/1VcUy4AGftkz6Sdtcij-JYGt1iZnzZ8TD/view?usp=sharing'
            },
            {
                titulo: 'ResoluÃ§Ã£o: Ex02',
                meet: 'https://drive.google.com/file/d/12ZUNWZsl0eB19AFw9pyAVx6RttVimuDQ/view?usp=sharing'
            },
        ],
        atividade: '<a href="http://www.gileduardo.com.br/ifpr/lp/rde/arquivos/atv06.pdf" target="_blank">Atividade PrÃ¡tica</a>',
        fonte: '<a href="http://www.gileduardo.com.br/ifpr/pci/rde/arquivos/code06.zip" target="_blank">CÃ³digo Exemplo</a>',
        encontro: '<a href="https://meet.google.com/hrv-ynju-fdu" target="_blank">Encontro: <b>10/Dez</b></a>',
        atendimento: '<a href="https://meet.google.com/yyu-gneo-dyn" target="_blank">Atendimento: <b>15/Dez</b></a>',
    },
    {
        conteudo: 'Atividade RevisÃ£o',
        material: '<b>Material DidÃ¡tico</b>',
        video: [
            {
                titulo: 'ResoluÃ§Ã£o: Ex01',
                meet: 'https://drive.google.com/file/d/1erg2nF932qwAUF6-s2ADrwkf1ZpVQxhd/view?usp=sharing'
            },
            {
                titulo: 'ResoluÃ§Ã£o: Ex03',
                meet: 'https://drive.google.com/file/d/1kVzWeXLUfBBOFSbJcK_V3y9L78E1uBHH/view?usp=sharing'
            },
            {
                titulo: 'ResoluÃ§Ã£o: Ex05',
                meet: 'https://drive.google.com/file/d/1V7Cn6ZYy6A1NA6OOYCVo3NChC-_z6R-H/view?usp=sharing'
            },
        ],
        atividade: '<a href="http://www.gileduardo.com.br/ifpr/lp/rde/arquivos/atv07.pdf" target="_blank">Atividade PrÃ¡tica</a>',
        fonte: '<a href="http://www.gileduardo.com.br/ifpr/pci/rde/arquivos/code07.zip" target="_blank">CÃ³digo Exemplo</a>',
        encontro: '<a href="https://meet.google.com/hrv-ynju-fdu" target="_blank">Encontro: <b>17/Dez</b></a>',
        atendimento: '<a href="https://meet.google.com/yyu-gneo-dyn" target="_blank">Atendimento: <b>22/Dez</b></a>',
    },
    {
        conteudo: 'Ponteiro e AlocaÃ§Ã£o',
        material: '<a href="http://www.gileduardo.com.br/ifpr/lp/downloads/lp_aula11.pdf" target="_blank">Material DidÃ¡tico</a>',
        video: [
            {
                titulo: '',
                meet: ''
            },
        ],
        atividade: '<a href="http://www.gileduardo.com.br/ifpr/lp/rde/arquivos/atv08.pdf" target="_blank">Atividade PrÃ¡tica</a>',
        fonte: '<a href="http://www.gileduardo.com.br/ifpr/pci/rde/arquivos/code08.zip" target="_blank">CÃ³digo Exemplo</a>',
        encontro: '<a href="https://meet.google.com/jad-nszr-ysv" target="_blank">Encontro: <b>14/Jan</b></a>',
        atendimento: '<a href="https://meet.google.com/pvs-doqc-hfc" target="_blank">Atendimento: <b>19/Jan</b></a>',
    },
    {
        conteudo: 'Biblioteca String',
        material: '<a href="http://www.gileduardo.com.br/ifpr/lp/downloads/lp_aula12.pdf" target="_blank">Material DidÃ¡tico</a>',
        video: [
            {
                titulo: '',
                meet: ''
            },
        ],
        atividade: '<a href="http://www.gileduardo.com.br/ifpr/lp/rde/arquivos/atv09.pdf" target="_blank">Atividade PrÃ¡tica</a>',
        fonte: '<a href="http://www.gileduardo.com.br/ifpr/pci/rde/arquivos/code09.zip" target="_blank">CÃ³digo Exemplo</a>',
        encontro: '<a href="https://meet.google.com/jad-nszr-ysv" target="_blank">Encontro: <b>21/Jan</b></a>',
        atendimento: '<a href="https://meet.google.com/pvs-doqc-hfc" target="_blank">Atendimento: <b>26/Jan</b></a>',
    },
    {
        conteudo: 'FunÃ§Ã£o',
        material: '<a href="http://www.gileduardo.com.br/ifpr/lp/downloads/lp_aula13.pdf" target="_blank">Material DidÃ¡tico</a>',
        video: [
            {
                titulo: '',
                meet: ''
            },
        ],
        atividade: '<a href="http://www.gileduardo.com.br/ifpr/lp/rde/arquivos/atv10.pdf" target="_blank">Atividade PrÃ¡tica</a>',
        fonte: '<a href="http://www.gileduardo.com.br/ifpr/pci/rde/arquivos/code10.zip" target="_blank">CÃ³digo Exemplo</a>',
        encontro: '<a href="https://meet.google.com/jad-nszr-ysv" target="_blank">Encontro: <b>28/Jan</b></a>',
        atendimento: '<a href="https://meet.google.com/pvs-doqc-hfc" target="_blank">Atendimento: <b>02/Fev</b></a>',
    },
    {
        conteudo: 'Passagem ReferÃªncia',
        material: '<a href="http://www.gileduardo.com.br/ifpr/lp/downloads/lp_aula14.pdf" target="_blank">Material DidÃ¡tico</a>',
        video: [
            {
                titulo: '',
                meet: ''
            },
        ],
        atividade: '<a href="http://www.gileduardo.com.br/ifpr/lp/rde/arquivos/atv11.pdf" target="_blank">Atividade PrÃ¡tica</a>',
        fonte: '<a href="http://www.gileduardo.com.br/ifpr/pci/rde/arquivos/code11.zip" target="_blank">CÃ³digo Exemplo</a>',
        encontro: '<a href="https://meet.google.com/jad-nszr-ysv" target="_blank">Encontro: <b>04/Fev</b></a>',
        atendimento: '<a href="https://meet.google.com/pvs-doqc-hfc" target="_blank">Atendimento: <b>09/Fev</b></a>',
    },
    {
        conteudo: 'Atividade - FunÃ§Ã£o',
        material: '<b>Material DidÃ¡tico</b>',
        video: [
            {
                titulo: '',
                meet: ''
            },
        ],
        atividade: '<a href="http://www.gileduardo.com.br/ifpr/lp/rde/arquivos/atv12.pdf" target="_blank">Atividade PrÃ¡tica</a>',
        fonte: '<a href="http://www.gileduardo.com.br/ifpr/pci/rde/arquivos/code12.zip" target="_blank">CÃ³digo Exemplo</a>',
        encontro: '<a href="https://meet.google.com/jad-nszr-ysv" target="_blank">Encontro: <b>11/Fev</b></a>',
        atendimento: '<b>Carnaval: 16/Fev</b>',
    },
    {
        conteudo: 'Arquivo Texto',
        material: '<a href="http://www.gileduardo.com.br/ifpr/lp/downloads/lp_aula15.pdf" target="_blank">Material DidÃ¡tico</a>',
        video: [
            {
                titulo: '',
                meet: ''
            },
        ],
        atividade: '<a href="http://www.gileduardo.com.br/ifpr/lp/rde/arquivos/atv13.pdf" target="_blank">Atividade PrÃ¡tica</a>',
        fonte: '<a href="http://www.gileduardo.com.br/ifpr/pci/rde/arquivos/code13.zip" target="_blank">CÃ³digo Exemplo</a>',
        encontro: '<a href="https://meet.google.com/jad-nszr-ysv" target="_blank">Encontro: <b>18/Fev</b></a>',
        atendimento: '<a href="https://meet.google.com/pvs-doqc-hfc" target="_blank">Atendimento: <b>23/Fev</b></a>',
    },
    {
        conteudo: 'Atividade Arquivo',
        material: '<b>Material DidÃ¡tico</b>',
        video: [
            {
                titulo: '',
                meet: ''
            },
        ],
        atividade: '<a href="http://www.gileduardo.com.br/ifpr/lp/rde/arquivos/atv14.pdf" target="_blank">Atividade PrÃ¡tica</a>',
        fonte: '<a href="http://www.gileduardo.com.br/ifpr/pci/rde/arquivos/code14.zip" target="_blank">CÃ³digo Exemplo</a>',
        encontro: '<a href="https://meet.google.com/jad-nszr-ysv" target="_blank">Encontro: <b>25/Fev</b></a>',
        atendimento: '<a href="https://meet.google.com/pvs-doqc-hfc" target="_blank">Atendimento: <b>02/Mar</b></a>',
    },
    {
        conteudo: 'Estrutura - Tipo',
        material: '<a href="http://www.gileduardo.com.br/ifpr/lp/downloads/lp_aula17.pdf" target="_blank">Material DidÃ¡tico</a>',
        video: [
            {
                titulo: '',
                meet: ''
            },
        ],
        atividade: '<a href="http://www.gileduardo.com.br/ifpr/lp/rde/arquivos/atv15.pdf" target="_blank">Atividade PrÃ¡tica</a>',
        fonte: '<a href="http://www.gileduardo.com.br/ifpr/pci/rde/arquivos/code15.zip" target="_blank">CÃ³digo Exemplo</a>',
        encontro: '<a href="https://meet.google.com/jad-nszr-ysv" target="_blank">Encontro: <b>04/Mar</b></a>',
        atendimento: '<a href="https://meet.google.com/pvs-doqc-hfc" target="_blank">Atendimento: <b>09/Mar</b></a>',
    },
    {
        conteudo: 'Arquivo BinÃ¡rio',
        material: '<a href="http://www.gileduardo.com.br/ifpr/lp/downloads/lp_aula18.pdf" target="_blank">Material DidÃ¡tico</a>',
        video: [
            {
                titulo: '',
                meet: ''
            },
        ],
        atividade: '<a href="http://www.gileduardo.com.br/ifpr/lp/rde/arquivos/atv16.pdf" target="_blank">Atividade PrÃ¡tica</a>',
        fonte: '<a href="http://www.gileduardo.com.br/ifpr/pci/rde/arquivos/code16.zip" target="_blank">CÃ³digo Exemplo</a>',
        encontro: '<a href="https://meet.google.com/jad-nszr-ysv" target="_blank">Encontro: <b>11/Mar</b></a>',
        atendimento: '<a href="https://meet.google.com/pvs-doqc-hfc" target="_blank">Atendimento: <b>16/Mar</b></a>',
    },
    {
        conteudo: 'Atividade RevisÃ£o',
        material: '<b>Material DidÃ¡tico</b>',
        video: [
            {
                titulo: '',
                meet: ''
            },
        ],
        atividade: '<a href="http://www.gileduardo.com.br/ifpr/lp/rde/arquivos/atv17.pdf" target="_blank">Atividade PrÃ¡tica</a>',
        fonte: '<a href="http://www.gileduardo.com.br/ifpr/pci/rde/arquivos/code17.zip" target="_blank">CÃ³digo Exemplo</a>',
        encontro: '<a href="https://meet.google.com/jad-nszr-ysv" target="_blank">Encontro: <b>18/Mar</b></a>',
        atendimento: '<a href="https://meet.google.com/pvs-doqc-hfc" target="_blank">Atendimento: <b>23/Mar</b></a>',
    },
]

function setTab(tab) {        
    // Troca Active
    changeActive(tab)
    // Troca ConteÃºdo
    changeContent(tab)
}

function changeActive(tab) {
    for(let a=0; a<TABS; a++) {
        if(a == tab)
            $("#t"+a).addClass("active");
        else
            $("#t"+a).removeClass("active");
    }
}

function changeContent(tab) {

    for(let a=0; a<TABS; a++) {
        if(a == tab) {
            $("#material").html(content[a].material)
            // VÃ­deos
            let videos='<table class="table"><tbody>';            
            for(let b=0; b<content[a].video.length; b++) {
                videos += '<tr><th scope="row"><img src="img/camera_green_ico.png" widths="24px" height="24px"></th>'
                videos += '<td><a href ="' + content[a].video[b].meet +'"target="_blank">' + content[a].video[b].titulo + '</a></td>'
            }
            videos += '</tbody></table>'
            $("#video").html(videos) 

            $("#atividade").html(content[a].atividade)
            $("#fonte").html(content[a].fonte)
            $("#encontro").html(content[a].encontro)
            $("#atendimento").html(content[a].atendimento)
        }
    }
}
