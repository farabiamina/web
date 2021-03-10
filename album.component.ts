import { Component, OnInit } from '@angular/core';

import {Album} from '../models';
import {AlbumService} from '../album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  albums: Album[];
  loaded: boolean;
  newAlbum: string;

  constructor(private albumService: AlbumService) {
    this.newAlbum = '';
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.loaded = false;
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    });
  }

  addAlbum() {
    const album = {
      title: this.newAlbum
    };
    this.loaded = false;
    this.albumService.addAlbum(album as Album).subscribe((album) => {
      this.albums.unshift(album);
      this.newAlbum = '';
      this.loaded = true;
    });
  }

  deleteAlbum(id: number) {
    this.albums = this.albums.filter((x) => x.id !== id);
    this.albumService.deleteAlbum(id).subscribe(() => {
      console.log('deleted', id);
    });
  }
}
