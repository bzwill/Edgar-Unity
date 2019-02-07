﻿namespace Assets.Scripts.GeneratorPipeline.DungeonGenerators.GraphBasedGenerator
{
	using Pipeline;
	using UnityEngine;

	[CreateAssetMenu(menuName = "Dungeon generator/Generators/Graph based generator", fileName = "GraphBasesGenerator")]
	public class GraphBasedGeneratorConfig : PipelineConfig
	{
		public bool ShowElapsedTime;

		public bool CenterGrid;

		public bool ApplyTemplate;
	}
}