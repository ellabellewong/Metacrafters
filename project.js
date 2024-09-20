/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let nftnum = 0;
let nftarray = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, desc, imageURL) {
    const nft = {
        name: name,
        desc: desc,
        imageURL: imageURL
    };

    nftarray.push(nft);
    nftnum++;
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    nftarray.forEach((nft, index) => {
        console.log(`NFT #${index + 1}:`);
        console.log("Name: " + nft.name);
        console.log("Description: " + nft.desc);
        console.log("Image URL: " + nft.imageURL);
    });
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftnum;
}

// call your functions below this line
mintNFT("CryptoNFT 1","Amazing NFT piece", "https://example.com/image1.png");
mintNFT("CryptoNFT 2","Nicely Done NFT", "https://example.com/image2.png");
mintNFT("CryptoNFT 3","What is this?", "https://example.com/image3.png");

console.log("Total NFTs created: " + getTotalSupply());
listNFTs();
