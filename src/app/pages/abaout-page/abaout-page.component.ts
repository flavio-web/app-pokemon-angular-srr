import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'about-page',
  standalone: true,
  imports: [],
  templateUrl: './abaout-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbaoutPageComponent implements OnInit {

  private title = inject( Title );
  private meta = inject( Meta );

  ngOnInit(): void {
    this.title.setTitle('Abaout Page');
    this.meta.updateTag({
      name: 'description',
      content: 'This is the about page of our application.'
    });
    this.meta.updateTag({
      name: 'autor',
      content: 'Ing. Flavio Roman Valdiviezo Mgtr.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'Flavio,Roman,Angular,Web'
    });
  }
}
