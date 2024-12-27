import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'pricing-page',
  standalone: true,
  imports: [],
  templateUrl: './pricing-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingPageComponent implements OnInit {

  private title = inject( Title );

  ngOnInit(): void {
    this.title.setTitle('Pricing Page');
  }
}
