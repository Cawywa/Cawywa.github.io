"use strict"

function calculateCost() {
    let websiteType = $('[name="site-type"]').val();
    let websiteDesign = $('[name="site-design"]').val();
    let websiteAdapt = $('[name="site-adapt"]').val();

    let result = 0;
    let deadline = 0;
    let time = {
        type: {
            0: 0, //not selected
            1: 7, //landing
            2: 7, //website card
            3: 14, //corporate
            4: 14, //store
            5: 14, //blog
        },
        design: {
            0: 0, //not selected
            1: 1, //classic
            2: 1, //minimalism
            3: 1, //modernism
            4: 2, //retro
            5: 2, //HI TECH
        },
        adaptability: {
            0: 0, //not selected
            1: 2, //rubber
            2: 3, //adaptive
            3: 4, //responsive
        },
    };
    let price = {
        type: {
            0: 0, //not selected
            1: 1000, //landing
            2: 1500, //website card
            3: 2000, //corporate
            4: 3000, //store
            5: 2000, //blog
        },
        design: {
            0: 0, //not selected
            1: 1000, //classic
            2: 1500, //minimalism
            3: 2000, //modernism
            4: 2000, //retro
            5: 2500, //HI TECH
        },
        adaptability: {
            0: 0, //not selected
            1: 1000, //rubber
            2: 1500, //adaptive
            3: 2000, //responsive
        },
    };

    result = price.type[websiteType] + price.design[websiteDesign] + price.adaptability[websiteAdapt];
    
    deadline = time.type[websiteType] + time.design[websiteDesign] + time.adaptability[websiteAdapt];
    
    $('.cost__value').text(result);
    
    $('.cost__days').text(deadline);

    
}
  