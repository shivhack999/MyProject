const express = require('express');
const productBrands = require('../models/productBrandModel');
const productCategorys = require('../models/productCategoryModel');
const productFabrics = require('../models/productFabricModel');
const productPatterns = require('../models/productPatternModel');
const productOccasions = require('../models/productOccasionModel');
const productNecks = require('../models/productNeckModel');
const productRatings = require('../models/productRatingModel');
const product = require('../models/productModel');

const addBrandController = async(req,res) =>{
    try {
        const name = req.body.brandName;
        if(!name){
            return res.status(400).json({
                success: false,
                msg: 'Enter Brand name!',
              });
        }
        const preBrand = await productBrands.findOne({name});
        if(preBrand){
            return res.status(400).json({
                success: false,
                msg: 'Brand already Exists!',
              });
        }
        const addBrand =  new productBrands({name});
        await addBrand.save();
        return res.status(200).json({
            success: true,
            msg: 'Successfully add brand name.',
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message,
        });
    }
};
const showBrandController = async(req, res) =>{
    try {
        const brands = await productBrands.find({},'name');
        const brandNames = brands.map(brand => brand.name);
        if(brandNames.length === 0){
            return res.status(200).json({
                success:true,
                msg: "Empty brand list",
            }); 
        }
        return res.status(200).json({
            brandList:brandNames,
        }); 
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message,
        });
    }
};
const deleteBrandController = async(req,res)=>{
    try {

        const name = req.body.brandName;
        if(!name){
            return res.status(400).json({
                success: false,
                msg: 'Enter Brand name!',
              });
        }
        const result = await productBrands.deleteOne({name});
        if(result.deletedCount === 0){
            return res.status(400).json({
                success: false,
                msg: `Brand name "${name}" not found.`,
              });
        }else{
            return res.status(200).json({
                success: true,
                msg: `Brand name ${name} deleted successfully.`,
            });
        }
        return res.status(400).json({
            success: false,
            msg: `Try again.`,
        });
             
        
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message,
        });
    }
};

const categoryAddController = async(req,res) =>{
    try {
        const name = req.body.categoryName;
        if(!name){
            return res.status(400).json({
                success: false,
                msg: 'Enter category name!',
              });
        }
        const preCategory = await productCategorys.findOne({name});
        if(preCategory){
            return res.status(400).json({
                success: false,
                msg: 'Category already Exists!',
              });
        }
        const addCategory =  new productCategorys({name});
        await addCategory.save();
        return res.status(200).json({
            success: true,
            msg: 'Successfully add Category name.',
        });
        
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message,
        });
    }
};
const categoryShowController = async(req,res) =>{
    try {
        const categorys = await productCategorys.find({},'name');
        const categoryNames = categorys.map(category => category.name);
        if(categoryNames.length === 0){
            return res.status(200).json({
                success:true,
                msg: "Empty category list",
            }); 
        }
        return res.status(200).json({
            categoryList:categoryNames,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message,
        });
    }
};
const categoryDeleteController = async(req,res) =>{
    try {
        const name = req.body.categoryName;
        if(!name){
            return res.status(400).json({
                success: false,
                msg: 'Enter category name!',
              });
        }
        const result = await productCategorys.deleteOne({name});
        if(result.deletedCount === 0){
            return res.status(400).json({
                success: false,
                msg: `Category name "${name}" not found.`,
              });
        }else{
            return res.status(200).json({
                success: true,
                msg: `Category name ${name} deleted successfully.`,
            });
        }
        return res.status(400).json({
            success: false,
            msg: `Try again.`,
        });
        
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message,
        });
    }
};

const fabricAddController = async(req,res) =>{
    try {
        const name = req.body.fabricName;
        if(!name){
            return res.status(400).json({
                success: false,
                msg: 'Enter fabric name!',
              });
        }
        const preFabric = await productFabrics.findOne({name});
        if(preFabric){
            return res.status(400).json({
                success: false,
                msg: 'Fabric already Exists!',
              });
        }
        const addFabric =  new productFabrics({name});
        await addFabric.save();
        return res.status(200).json({
            success: true,
            msg: 'Successfully add Fabric name.',
        });
        
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message,
        });
    }
};
const fabricShowController = async(req,res) =>{
    try {
        const fabrics = await productFabrics.find({},'name');
        const fabricNames = fabrics.map(fabric => fabric.name);
        if(fabricNames.length === 0){
            return res.status(200).json({
                success:true,
                msg: "Empty fabric list",
            }); 
        }
        return res.status(200).json({
            fabricList:fabricNames,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message,
        });
    }
};
const fabricDeleteController = async(req,res) =>{
    try {
        const name = req.body.fabricName;
        if(!name){
            return res.status(400).json({
                success: false,
                msg: 'Enter fabric name!',
              });
        }
        const result = await productFabrics.deleteOne({name});
        if(result.deletedCount === 0){
            return res.status(400).json({
                success: false,
                msg: `fabric name "${name}" not found.`,
              });
        }else{
            return res.status(200).json({
                success: true,
                msg: `fabric name ${name} deleted successfully.`,
            });
        }
        return res.status(400).json({
            success: false,
            msg: `Try again.`,
        });
        
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message,
        });
    }
};

const patternAddController = async(req,res) =>{
    try {
        const name = req.body.patternName;
        if(!name){
            return res.status(400).json({
                success: false,
                msg: 'Enter pattern name!',
              });
        }
        const prePattern = await productPatterns.findOne({name});
        if(prePattern){
            return res.status(400).json({
                success: false,
                msg: 'Pattern already Exists!',
              });
        }
        const addPattern =  new productPatterns({name});
        await addPattern.save();
        return res.status(200).json({
            success: true,
            msg: 'Successfully Add Pattern Name.',
        });
        
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message,
        });
    }
};
const patternShowController = async(req,res) =>{
    try {
        const patterns = await productPatterns.find({},'name');
        const patternNames = patterns.map(pattern => pattern.name);
        if(patternNames.length === 0){
            return res.status(200).json({
                success:true,
                msg: "Empty pattern list",
            }); 
        }
        return res.status(200).json({
            patternList:patternNames,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message,
        });
    }
};
const patternDeleteController = async(req,res) =>{
    try {
        const name = req.body.patternName;
        if(!name){
            return res.status(400).json({
                success: false,
                msg: 'Enter pattern name!',
              });
        }
        const result = await productPatterns.deleteOne({name});
        if(result.deletedCount === 0){
            return res.status(400).json({
                success: false,
                msg: `Pattern name "${name}" not found.`,
              });
        }else{
            return res.status(200).json({
                success: true,
                msg: `Pattern name ${name} deleted successfully.`,
            });
        }
        return res.status(400).json({
            success: false,
            msg: `Try again.`,
        });
        
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message,
        });
    }
}

const occasionAddController = async(req,res) =>{
    try {
        const name = req.body.occasionName;
        if(!name){
            return res.status(400).json({
                success: false,
                msg: 'Enter occasion name!',
              });
        }
        const preOccasion = await productOccasions.findOne({name});
        if(preOccasion){
            return res.status(400).json({
                success: false,
                msg: 'Occasion already Exists!',
              });
        }
        const addOccasion =  new productOccasions({name});
        await addOccasion.save();
        return res.status(200).json({
            success: true,
            msg: 'Successfully Add Occasion Name.',
        });
        
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message,
        });
    }
};
const occasionShowController = async(req,res) =>{
    try {
        const occasions = await productOccasions.find({},'name');
        const occasionNames = occasions.map(occasion => occasion.name);
        if(occasionNames.length === 0){
            return res.status(200).json({
                success:true,
                msg: "Empty occasion list",
            }); 
        }
        return res.status(200).json({
            occasionList:occasionNames,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message,
        });
    }
};
const occasionDeleteController = async(req,res) =>{
    try {
        const name = req.body.occasionName;
        if(!name){
            return res.status(400).json({
                success: false,
                msg: 'Enter Occasion name!',
              });
        }
        const result = await productOccasions.deleteOne({name});
        if(result.deletedCount === 0){
            return res.status(400).json({
                success: false,
                msg: `Occasion name "${name}" not found.`,
              });
        }else{
            return res.status(200).json({
                success: true,
                msg: `Occasion name ${name} deleted successfully.`,
            });
        }
        return res.status(400).json({
            success: false,
            msg: `Try again.`,
        });
        
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message,
        });
    }
}

const neckAddController = async(req,res) =>{
    try {
        const name = req.body.neckName;
        if(!name){
            return res.status(400).json({
                success: false,
                msg: 'Enter neck name!',
              });
        }
        const preNeck = await productNecks.findOne({name});
        if(preNeck){
            return res.status(400).json({
                success: false,
                msg: 'Neck already Exists!',
              });
        }
        const addNeck =  new productNecks({name});
        await addNeck.save();
        return res.status(200).json({
            success: true,
            msg: 'Successfully Add Neck Name.',
        });
        
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message,
        });
    }
};
const neckShowController = async(req,res) =>{
    try {
        const necks = await productNecks.find({},'name');
        const neckNames = necks.map(neck => neck.name);
        if(neckNames.length === 0){
            return res.status(200).json({
                success:true,
                msg: "Empty neck list",
            }); 
        }
        return res.status(200).json({
            neckList:neckNames,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message,
        });
    }
};
const neckDeleteController = async(req,res) =>{
    try {
        const name = req.body.neckName;
        if(!name){
            return res.status(400).json({
                success: false,
                msg: 'Enter Neck name!',
              });
        }
        const result = await productNecks.deleteOne({name});
        if(result.deletedCount === 0){
            return res.status(400).json({
                success: false,
                msg: `Neck name "${name}" not found.`,
              });
        }else{
            return res.status(200).json({
                success: true,
                msg: `Neck name ${name} deleted successfully.`,
            });
        }
        return res.status(400).json({
            success: false,
            msg: `Try again.`,
        });
        
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message,
        });
    }
};

const productAddController = async(req,res) =>{
    const {serialNumber, title, brand, category, gender, desc, buyPrice, sellPrice, discount, fabric, pattern, occasion, neck, minPrice, colors } = req.body;
    try {
        const preProduct = await product.findOne({serialNumber});
        if(preProduct){
            return res.status(401).json({
                success: false,
                msg: 'Product already Exists!',
              });
        }
        const newProduct = new product({
            serialNumber,
            title,
            brand,
            category,
            gender,
            desc, 
            buyPrice, 
            sellPrice, 
            discount, 
            fabric, 
            pattern, 
            occasion, 
            neck, 
            minPrice,  
            colors
        });
        // console.log("jhbh");
        const addProduct = await newProduct.save();
        return res.status(200).json({
            success: true,
            msg: 'Successfully add new item.',
            item:addProduct
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
const productAllShowController = async(req,res) =>{
    try {
        
    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message,
        });
    }
}
const productRatingController = async(req,res) =>{
    try {
          const userId = req.user.userData._id;
          const {productId,star,message} = req.body;
          if(!userId){
            return res.status(401).json({
                success: false,
                msg: "Login First",
            });
          }
          if(!productId){
            return res.status(400).json({
                success: false,
                msg: "Something is missing please try again!",
            });
          }
          await productRatings.findOneAndUpdate(
            {userId , product},
            {star, message},
            {new:true,upsert: true}
          );
          return res.status(200).json({
            success: true,
            msg:" Thank You for feedback",
          });

    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message,
        });
    }
};
module.exports ={
    addBrandController,
    showBrandController,
    deleteBrandController,
    categoryAddController,
    categoryShowController,
    categoryDeleteController,
    fabricAddController,
    fabricShowController,
    fabricDeleteController,
    patternAddController,
    patternShowController,
    patternDeleteController,
    occasionAddController,
    occasionShowController,
    occasionDeleteController,
    neckAddController,
    neckShowController,
    neckDeleteController,
    productRatingController,
    productAddController,
    productAllShowController,
}