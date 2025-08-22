<script setup lang="ts">
import { AccessEnum } from "~@/utils/constant";

const { hasAccess, roles } = useAccess();
</script>

<template>
  <div class="flex flex-col gap-2">
    <div>
      Current user has a list of permissions <a class="c-primary"> {{ roles?.join(',') }}</a>
    </div>

    All users can view
    Fine-grained control down to the button level

    <a-alert message="useAccessComponent" />
    <a-space>
      <Access :access="[AccessEnum.USER, AccessEnum.ADMIN]">
        <a-button>Regular user</a-button>
      </Access>
      <Access :access="AccessEnum.ADMIN">
        <a-button type="primary">
          Administrator
        </a-button>
      </Access>
    </a-space>
    <a-alert message="useuseAccessCompositionApi" />
    <a-space>
      <a-button v-if="hasAccess([AccessEnum.USER, AccessEnum.ADMIN])">
        Regular user
      </a-button>
      <a-button v-if="hasAccess(AccessEnum.ADMIN)" type="primary">
        Administrator
      </a-button>
    </a-space>
    <a-alert message="usev-accessDirective" />
    <a-space>
      <a-button v-access="[AccessEnum.USER, AccessEnum.ADMIN]">
        Regular user
      </a-button>
      <a-button v-access="AccessEnum.ADMIN" type="primary">
        Administrator
      </a-button>
    </a-space>
  </div>
</template>
