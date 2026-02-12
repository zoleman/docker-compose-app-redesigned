import React ,{useState} from 'react'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldGroup,
  FieldLegend,
} from "@/components/ui/field"
import { Label } from "@/components/ui/label"



function SideFilterSection({selectedBrand, handleSelectedBrand, brands}) {



    return (
        <section className=' space-y-4 lg:sticky! lg:top-24!'>
            <Card className="border-primary/20 bg-primary/5">
                <CardContent>
                    <FieldLegend variant='legend' className="mt-4">
                        Choose Brand
                    </FieldLegend>
                    <FieldGroup className="max-w-sm mt-6" >
                        {brands && brands.map(brand => {
                            const id = brand.id
                            
                            return (
                            <Field key={id} orientation='horizontal'>
                                <Checkbox id={id}
                                checked={selectedBrand.includes(id)}
                                onCheckedChange={(checked) => {
                                    console.log(checked)
                                    handleSelectedBrand(checked,id)
                                }}
                                 name={id} />
                                <Label htmlFor={id} className="text-muted-foreground"> {brand.name}</Label>
                            </Field>
                        )})}

                    </FieldGroup>
                </CardContent>
            </Card>

        </section>
    )
}

export default SideFilterSection