import React from 'react';
import { Form, FormGroup, Label, Input,Button,Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import './formulario.css';
export default class Example extends React.Component {
    
    render() {
      
        return (<Form>
            <h1>Registrar Centro Educativo</h1>
            <FormGroup>
                <Label   className="pop" for="exampleName"></Label>
                <Input type="nombre" name="nombre" id="exampleCentro" placeholder="Nombre del Centro" />
            </FormGroup>
            <FormGroup>
                <Label  className="pop" for="exampleSiglas"></Label>
                <Input type="siglas" name="siglas" id="exampleSiglas" placeholder="Siglas" />
            </FormGroup>
            <FormGroup>
                <Label className="pop" for="exampleEmail"></Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="Correo" />
            </FormGroup>
            <FormGroup>
                <Label className="pop" for="exampleTelefono"></Label>
                <Input type="number" name="telefono" id="exampleTelefono" placeholder="Telefono" />
            </FormGroup>
            <FormGroup>
                <Label  className="pop" for="exampleCentro"></Label>
                <Input type="centro" name="centro" id="exampleCentro" placeholder="Tipo de Centro" />
            </FormGroup>
            <FormGroup>
                <Label  className="pop" for="examplePassword"></Label>
                <Input type="password" name="password" id="examplePassword" placeholder="Contraseña" />
            </FormGroup>
             <FormGroup>
                <Label  className="pop" for="exampleZona"></Label>
                <Input type="zona" name="zona" id="exampleZona" placeholder="Zona donde esta el centro" />
            </FormGroup>
            <FormGroup>
                <Label  className="pop" for="exampleDistrito"></Label>
                <Input type="distrito" name="distrito" id="exampleDistrito" placeholder="Distrito donde se encuentra el centro" />
            </FormGroup>

            <FormGroup>
                <Label className="pop" for="exampleRegional"> </Label>
                <Input type="regional" name="regional" id="exampleRegional" placeholder="Regional a la que pertenece el centro" />
            </FormGroup>

            <FormGroup>
                <Label  className="pop" for="exampleModalidad"></Label>
                <Input type="select" name="Modalidad" id="exampleModalidad">
                    <option>...</option>
                    <option>Informatica</option>
                    <option>Electricidad</option>
                    <option>Contabilidad</option>
                    <option>Gastronomia</option>
                    <option>Mercadeo</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label  className="pop" for="exampleTanda"></Label>
                <Input type="select" name="horario" id="exampleTanda">
                    <option>Vespertina</option>
                    <option>Matutina</option>
                    <option>Tanda extendida</option>
                   
                </Input>
            </FormGroup>
            <FormGroup>
                <Label  className="pop" for="exampleTime"></Label>
                <Input type="date" name="fecha" id="exampleTime" placeholder="Fecha de Creacion" />
            </FormGroup>
            <FormGroup>
                <Label class="rounded-circle" for="exampleObservaciones"></Label>
                <Input type="textarea" name="text" id="exampleObservaciones" placeholder="OBSERVACIONES" />
            </FormGroup>
            <Button outline color="primary">Registrar</Button>

           
            <Pagination aria-label="Page navigation example">
      <PaginationItem disabled>
          <PaginationLink first href="#" />
        </PaginationItem>
        <PaginationItem disabled>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem active>
          <PaginationLink href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            4
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            5
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last href="#" />
        </PaginationItem>
      </Pagination>
      
        </Form>);
    }
}
