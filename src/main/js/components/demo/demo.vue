<template>
    <article class="container">
        <header>
            <h1>Aggregate stream items</h1>

            <button ref="emitter" class="btn btn-primary">Emit</button>
        </header>

        <hr>

        <dl>
            <template v-for="part in partedLogs">
                <dt>Size {{part.length}}</dt>
                <dd>
                    <li v-for="log in part">{{log.timestamp}} [{{log.level}}] {{log.message}}</li>
                </dd>
            </template>
        </dl>
    </article>
</template>

<script lang="ts" src="./demo.vue.ts"></script>
