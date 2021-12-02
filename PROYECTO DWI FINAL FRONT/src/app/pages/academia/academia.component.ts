import { Component, OnInit } from "@angular/core";
import { AcademiaService } from "../../services/academia.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-academia",
  templateUrl: "./academia.component.html",
  styleUrls: ["./academia.component.css"],
})
export class AcademiaComponent implements OnInit {
  academias: any[] = [];
  nombre = "";

  constructor(protected academiaService: AcademiaService) {}

  ngOnInit() {
    this.obtener();
  }

  Agregar(Nombre) {
    this.academiaService
      .registrar(Nombre)

      .then((data) => {
        // Success

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,

          timer: 1500,
        });

        this.obtener();
      })

      .catch((error) => {
        console.error(error);
      });
  }

  AlertaDelete(Id) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",

        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",

        reverseButtons: true,
      })
      .then((result) => {
        if (result.value) {
          swalWithBootstrapButtons.fire(
            "Deleted!",
            "Your file has been deleted.",
            "success"
          );
          this.Eliminar(Id);
          this.obtener();
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",

            "Your file is safe :)",

            "error"
          );
        }
      });
  }
  Eliminar(Id) {
    this.academiaService
      .eliminar(Id)
      .then((data) => {
        // Success
        //location.reload();
        this.obtener();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  Editar(id: any, nombre: any) {
    this.academiaService
      .actualizar(id, nombre)

      .then((data) => {
        console.log(data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,

          timer: 1500,
        });
        this.obtener();
      })
      .catch((error) => {
        console.error(error);
      });
  }
  AlertaEditar(Id, inputValue) {
    Swal.fire({
      title: "Nuevo nombre de la academia",
      input: "text",
      inputValue: inputValue,
      showCancelButton: true,

      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!";
        }
        this.Editar(Id, value);
        this.obtener();
      },
    });
  }

  obtener() {
    this.academiaService
      .obtener()

      .then((data) => {
        // Success
        this.academias = data["academia"];
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
