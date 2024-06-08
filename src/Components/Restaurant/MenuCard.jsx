import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import { Category } from "@mui/icons-material";
const ingredients = [
  {
    Category: "Nuts and Seeds",
    ingredients: ["Almonds", "Cashew", "Pistachio"],
  },
  {
    Category: "Bread",
    ingredients: ["Whole Wheat Bread", "White Bread", "Brown Bread"],
  },
  {
    Category: "Protein",
    ingredients: ["Protein"],
  },
];

export const MenuCard = (item) => {
  const HandleCheckBoxChange = (item) => {
    console.log(item);
  };
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="lg:flex items-center justify-between gap-5">
            <div className="lg:flex items-center lg:gap-5">
              <img
                src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
                alt=""
                className="w-[9rem] h-[9rem] object-cover"
              />
            </div>
            <div className="space-y-2 lg:space-y-7 lg:max-w-2xl">
              <p className=" font-semibold text-xl">Burger</p>
              <p>₹499</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form action="">
            <div className="flex gap-5 flex-wrap">
              {ingredients.map((item) => (
                <div>
                  <p>{item.Category}</p>
                  <FormGroup>
                    {item.ingredients.map((ingredient) => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={() => HandleCheckBoxChange(item)}
                          />
                        }
                        label={ingredient}
                      />
                    ))}
                  </FormGroup>
                </div>
              ))}
            </div>
            <div className="pt-5">
              <Button type="submit" variant="contained" disabled={false}>
                {true ? "Add to Cart" : "Out of Stock"}
              </Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
