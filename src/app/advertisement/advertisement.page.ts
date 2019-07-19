import { Component, OnInit, ChangeDetectorRef } from "@angular/core";

import { Router } from "@angular/router";
import { Location } from "@angular/common";

import {
  Camera,
  CameraOptions,
  PictureSourceType
} from "@ionic-native/Camera/ngx";
import {
  ActionSheetController,
  ToastController,
  Platform,
  LoadingController
} from "@ionic/angular";
import { File, FileEntry } from "@ionic-native/File/ngx";
import { HttpClient } from "@angular/common/http";
import { WebView } from "@ionic-native/ionic-webview/ngx";
import { Storage } from "@ionic/storage";
import { FilePath } from "@ionic-native/file-path/ngx";

const STORAGE_KEY = "my_images";
declare var cordova: any;
@Component({
  selector: "app-advertisement",
  templateUrl: "./advertisement.page.html",
  styleUrls: ["./advertisement.page.scss"]
})
export class AdvertisementPage implements OnInit {
  images = [];
  image: any = "";
  constructor(
    private router: Router,
    private location: Location,
    private camera: Camera,
    private file: File,
    private http: HttpClient,
    private webview: WebView,
    private actionSheetController: ActionSheetController,
    private toastController: ToastController,
    private storage: Storage,
    private plt: Platform,
    private loadingController: LoadingController,
    private ref: ChangeDetectorRef,
    private filePath: FilePath
  ) {}

  ngOnInit() {}

  selectImage(num) {
    if (num === 1) {
      this.pictureFromCamera();
    } else {
      this.openGallery();
    }
  }
  async openGallery() {
    let cameraOptions = {
      sourceType: 0,
      destinationType: this.camera.DestinationType.DATA_URL,
      quality: 100,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true
    };

    const result = await this.camera.getPicture(cameraOptions);

    this.images.push({ path: `data:image/jpeg;base64,${result}` });
  }
  async pictureFromCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      saveToPhotoAlbum: true
    };

    this.takePhoto(options);
  }

  async takePhoto(options: CameraOptions) {
    try {
      const result = await this.camera.getPicture(options);

      this.images.push({ path: `data:image/jpeg;base64,${result}` });
      // console.log(this.image);
    } catch (e) {
      console.error(e);
    }
  }
  deleteImage(img, pos) {
    this.images.splice(pos, 1);
  }
  back() {
    this.location.back();
  }
  save() {
    this.router.navigateByUrl("/incidents/tohandle");
  }
}
