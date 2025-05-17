import { NgIf } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NasaService } from '../../../services/nasa.service';

@Component({
  selector: 'app-apod',
  imports: [NgIf],
  templateUrl: './apod.component.html',
  styleUrl: './apod.component.scss'
})
export class ApodComponent {
readonly #nasaService = inject(NasaService);
  readonly #sanitizer = inject(DomSanitizer);
  readonly nasaApod = toSignal(this.#nasaService.getNasaApod(), {
    initialValue: null,
  });

  readonly loading = computed(() => this.nasaApod() === null);

  readonly safeVideoUrl = computed<SafeResourceUrl | null>(() => {
    const data = this.nasaApod();
    return data?.media_type === 'video'
      ? this.#sanitizer.bypassSecurityTrustResourceUrl(data.url)
      : null;
  });
}
