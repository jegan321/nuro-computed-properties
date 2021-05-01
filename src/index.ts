import { createdComputedProperty } from './create-computed-property'

const NuroComputedProperites = {
  install(Nuro: any) {
    Nuro.mixin({
      $computed: createdComputedProperty
    })
  }
}

export default NuroComputedProperites
